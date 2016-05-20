'use strict';

const assert = require('assert');
const path = require('path');
const CLIEngine = require('eslint').CLIEngine;

const configFile = path.resolve(__dirname, '..', 'index.js');
const ERR = 2;

const config = new CLIEngine({
    configFile,
}).getConfigForFile(configFile);
const rules = config.rules;

// Ensure that the config has some expected values
assert.equal(rules.curly, ERR);
