'use strict';

const assert = require('assert');
const CLIEngine = require('eslint').CLIEngine;

const configFile = require.resolve('../packages/eslint-config-finn/index.js');

const config = new CLIEngine({
    configFile,
}).getConfigForFile(configFile);
const rules = config.rules;

// Ensure that the config has some expected values
assert.equal(rules.curly, 'error');
