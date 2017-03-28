'use strict';

module.exports = {
    extends: [
        'eslint-config-schibsted/env-node',
    ].map(require.resolve),
    rules: {
        'no-console': 'off',
    },
};
