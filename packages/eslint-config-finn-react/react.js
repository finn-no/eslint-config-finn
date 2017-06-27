'use strict';

module.exports = {
    extends: ['eslint-config-schibsted-react'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
    },
};
