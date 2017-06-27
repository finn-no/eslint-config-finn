'use strict';

module.exports = {
    extends: 'prettier',
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            { tabWidth: 4, singleQuote: true, trailingComma: 'es5' },
        ],
    },
};
