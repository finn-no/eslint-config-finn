{
    "extends": "eslint:recommended",
    "env": {
        "es6": true
    },

    "ecmaFeatures": {
    },

    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },

    "rules": {
        // Best Practices
        "block-scoped-var": 2,
        "complexity": [2, 10],
        "curly": 2,
        "eqeqeq": [2, "smart"],
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-empty-pattern": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": 2,
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-warning-comments": 2,
        "no-with": 2,
        "wrap-iife": [2, "inside"],

        // Variables
        "no-catch-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-use-before-define": [2, "nofunc"],

        // Stylistic issues
        "array-bracket-spacing": 2,
        "block-spacing", 2,
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "func-style": [2, "declaration"],
        "id-length": [2, {"min": 3, "properties": "never", "exceptions": ["i"]}],
        "indent": 2
    }
}
