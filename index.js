'use strict';
var OFF = 0;
var ERR = 2;

module.exports = {
    extends: [
        'spt',
    ],

    rules: {
        'eqeqeq': [ERR, 'smart'],
        'no-eq-null': OFF,
        'no-undefined': OFF,
        'vars-on-top': OFF,
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
        'no-debugger': ERR,
        'no-trailing-spaces': ERR,
        'no-useless-call': ERR,
        'no-duplicate-imports': ERR,
        'no-shadow-restricted-names': ERR,
        'no-use-before-define': [ERR, { functions: false }],
        'prefer-spread': ERR,
        'yoda': ERR,
        'array-callback-return': ERR,
        'no-negated-in-lhs': ERR,
        'prefer-template': ERR,
        'one-var': [ERR, 'never'],
        'no-spaced-func': ERR,
        'space-infix-ops': ERR,
        'template-curly-spacing': ERR,
    },
};
