'use strict';

module.exports = {
    extends: 'prettier',
    plugins: [
        'prettier',
    ],

    rules: {
        'prettier/prettier': ['error', { printWidth: 120, tabWidth: 4, singleQuote: true, trailingComma: 'es5' }],
    },
};
