'use strict';
module.exports = {
    extends: [
        'eslint-config-spt/env-es6-false',
    ].map(require.resolve),
    rules: {
        'arrow-body-style': 'off',
        'arrow-spacing': 'off',
        'computed-property-spacing': 'off',
        'no-class-assign': 'off',
        'no-confusing-arrow': 'off',
        'no-duplicate-imports': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'prefer-template': 'off',
        'template-curly-spacing': 'off',
    },
};
