'use strict';

module.exports = {
    extends: ['./node'].map(require.resolve),
    rules: {
        'prefer-arrow-callback': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
    },
};
