'use strict';
module.exports = {
    extends: [
        'eslint-config-spt/env-es6-false',
    ].map(require.resolve),
    rules: {
        'prefer-arrow-callback': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
    },
};
