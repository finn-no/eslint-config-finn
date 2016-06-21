#!/usr/bin/env node
'use strict';

const async = require('async');
const eslint = require('eslint');
const fs = require('fs');
const marked = require('marked');
const path = require('path');

const CLIEngine = eslint.CLIEngine;
const configFile = path.resolve(process.cwd(), process.argv[2]);
const rulesDocPath = path.resolve(__dirname, '../rules');

function ruleToFile (ruleName) {
    return path.resolve(rulesDocPath, `${ruleName}.md`);
}

function relevantRuleDoc (rule) {
    const lexer = new marked.Lexer();
    const tokens = lexer.lex(rule.doc);
    let currentHeading = {
        l1: '',
        l2: '',
        l3: '',
        l4: '',
    };
    let isListItem = false;
    let itemText;

    const relevantDoc = tokens.reduce((r, token) => {
        if (token.type === 'heading') {
            currentHeading[`l${token.depth}`] = token.text;
        } else if (token.type === 'list_item_start') {
            isListItem = true;
            itemText = [];
        } else if (token.type === 'list_item_end') {
            isListItem = false;
            if (itemText && itemText.length) {
                r.options.push(itemText.join(' '));
            }
            itemText = null;
        }

        if (token.type === 'heading' && token.depth === 1) {
            r.heading = token.text;
        } else if (currentHeading.l2 === 'Options' && isListItem && token.text) {
            itemText.push(token.text);
        } else if (token.type === 'code') {
            r.code.push(token.text);
        }

        return r;
    }, { code: [], options: [] });

    rule.generated = relevantDoc;

    return rule;
}

function printOption (opt) {
    if (typeof opt == 'object') {
        Object.keys(opt).forEach((key) => {
            console.log(`  * ${key} = ${opt[key]}`);
        });
    } else {
        console.log(`  * ${opt}`);
    }
}

console.log('# Rules\n');
const config = new CLIEngine({
    configFile,
}).getConfigForFile(configFile);
const rules = config.rules;

function getRuleLevel (ruleConfig) {
    return (Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig);
}

const enabledRules = Object.keys(rules).filter((ruleName) => getRuleLevel(rules[ruleName]));

async.map(enabledRules.map(ruleToFile), fs.readFile, function (err, results) {
    if (err) {
        console.error(err);
        return;
    }

    results.map(buffer => buffer.toString()).map((doc, i) => {
        const name = enabledRules[i];
        return {
            name,
            config: rules[name],
            doc,
        };
    }).map(relevantRuleDoc)
    .forEach((rule) => {
        console.log(`## [${rule.name}](http://eslint.org/docs/rules/${rule.name})`);
        console.log(`${rule.generated.heading}`);
        console.log('');

        if (rule.generated.options && rule.generated.options.length) {
            console.log('### Available options');
            rule.generated.options.forEach(o => { console.log(`* ${o}`); });
            console.log('');
        }

        if (Array.isArray(rule.config) && rule.config.length > 1) {
            console.log('### Current options');
            rule.config.slice(1).forEach(function printOpt (opt) {
                printOption(opt);
            });
        }

        console.log('');
    });
});
