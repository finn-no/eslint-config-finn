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
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
    },
};
