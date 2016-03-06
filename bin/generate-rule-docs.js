#!/usr/bin/env node
"use strict";

var async = require('async');
var eslint = require('eslint');
var fs = require('fs');
var marked = require('marked');
var path = require('path');

var CLIEngine = eslint.CLIEngine;
var configFile = path.resolve(process.cwd(), process.argv[2]);
var rulesDocPath = path.resolve(__dirname, '../rules');
var lexer = new marked.Lexer();

function ruleToFile (ruleName) {
    return path.resolve(rulesDocPath, `${ruleName}.md`)
}

function relevantRuleDoc (rule) {
    var tokens = lexer.lex(rule.doc);

    const relevantDoc = tokens.reduce((r, token) => {
        if (token.type === 'heading' && token.depth === 1) {
            r.heading = token.text;
        } else if (token.type === 'code') {
            r.code.push(token.text);
        }
        return r;
    }, {code: []});

    rule.generated = relevantDoc;

    return rule;
}

console.log('# Rules\n');
var config = new CLIEngine({
    configFile: configFile,
}).getConfigForFile(configFile);
var rules = config.rules;

function getRuleLevel (ruleConfig) {
    return (Array.isArray(ruleConfig) ? ruleConfig[0]: ruleConfig);
}

const enabledRules = Object.keys(rules).filter((ruleName) => {
    return getRuleLevel(rules[ruleName]);
});

async.map(enabledRules.map(ruleToFile), fs.readFile, function (err, results) {
    if (err) {
        console.error(err);
        return;
    }

    results.map(buffer => buffer.toString()).map((doc, i) => {
        const name = enabledRules[i];
        return {
            name: name,
            config: rules[name],
            doc: doc
        };
    }).map(relevantRuleDoc).forEach((rule) => {
        const LEVEL = getRuleLevel(rule.config);
        let levelName;
        if (LEVEL === 2) {
            levelName = 'Error';
        } else if (LEVEL === 1) {
            levelName = 'Warning';
        }

        console.log(`* [${rule.generated.heading}](http://eslint.org/docs/rules/${rule.name}) (${ levelName })`);

        if (Array.isArray(rule.config) && rule.config.length > 1) {
            rule.config.slice(1).forEach(function printOpt (opt) {
                if (typeof opt == 'object') {
                    Object.keys(opt).forEach((key) => {
                        console.log(`  * ${key} = ${opt[key]}`);
                    });
                } else {
                    console.log(`  * ${opt}`);
                }

            });
        }
    });

});


//var messages = linter.verify('var foo;', config);
