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
const lexer = new marked.Lexer();

function ruleToFile (ruleName) {
    return path.resolve(rulesDocPath, `${ruleName}.md`);
}

function relevantRuleDoc (rule) {
    const tokens = lexer.lex(rule.doc);

    const relevantDoc = tokens.reduce((r, token) => {
        if (token.type === 'heading' && token.depth === 1) {
            r.heading = token.text;
        } else if (token.type === 'code') {
            r.code.push(token.text);
        }
        return r;
    }, { code: [] });

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
        const LEVEL = getRuleLevel(rule.config);
        let levelName;
        if (LEVEL === 2 || LEVEL === 'error') {
            levelName = 'Error';
        } else if (LEVEL === 1 || LEVEL === 'warn') {
            levelName = 'Warning';
        }

        console.log(`* [${rule.generated.heading}](http://eslint.org/docs/rules/${rule.name}) (${levelName})`);

        if (Array.isArray(rule.config) && rule.config.length > 1) {
            rule.config.slice(1).forEach(function printOpt (opt) {
                printOption(opt);
            });
        }
    });
});
// var messages = linter.verify('var foo;', config);
