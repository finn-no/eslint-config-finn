'use strict';

var assert = require('assert');
var config = require('../index.js');

const ERR = 2;

// Ensure that the config has some expected values
assert.equal(config.rules.curly, ERR);
