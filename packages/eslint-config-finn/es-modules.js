'use strict';
module.exports = {
    extends: [
        'eslint-config-spt/env-es6-modules',
    ].map(require.resolve),
};
