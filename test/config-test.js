'use strict';

var assert = require('assert');
var config = require('../');

// Ensure that the config has some expected values
assert.equal(config.env.node, true);
assert.equal(config.rules.radix, 2);
