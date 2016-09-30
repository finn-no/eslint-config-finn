'use strict';

module.exports = {
    extends: [
        'eslint-config-spt/env-node',
    ].map(require.resolve),
    rules: {
        'no-console': 'off',
    },
};
