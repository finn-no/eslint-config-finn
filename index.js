'use strict';
var ERR = 2;

module.exports = {
    extends: [
        'spt'
    ],

    rules: {
        'eqeqeq': [ERR, 'smart']
    },

    globals: {
        document: false,
        navigator: false,
        window: false,
        global: false
    }
};
