'use strict';
module.exports = {
    extends: [
        'eslint-config-spt-react',
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'react/jsx-wrap-multilines': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/wrap-multilines': 'off',
    },
};
