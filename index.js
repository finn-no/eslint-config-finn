'use strict';
var OFF = 0;
var ERR = 2;

module.exports = {
    extends: [
        'spt'
    ],

    rules: {
        'eqeqeq': [ERR, 'smart'],
        'no-eq-null': OFF,
    }
};
