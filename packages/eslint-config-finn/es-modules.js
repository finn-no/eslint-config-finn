'use strict';

module.exports = {
    extends: [
        'eslint-config-schibsted/env-es6-modules',
    ].map(require.resolve),
};
