'use strict';
module.exports = {
    extends: [
        'spt/env-react'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'react/no-multi-comp': ['error', { ignoreStateless: true }]
    }
};
