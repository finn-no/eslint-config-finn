'use strict';
var ERR = 2;

module.exports = {
    extends: [
        'spt',
    ],

    rules: {
        'eqeqeq': [ERR, 'smart'],
        'no-undefined': 0,
        'vars-on-top': 0,
        'comma-dangle': [ERR, 'always-multiline'],
        'computed-property-spacing': ERR,
        'no-case-declarations': ERR,
        'no-class-assign': ERR,
        'no-cond-assign': [ERR, 'always'],
        'no-console': ERR,
        'array-bracket-spacing': ERR,
        'arrow-body-style': [ERR, 'as-needed'],
        'arrow-spacing': ERR,
        'block-spacing': ERR,
    },
};
