var DISABLED = 0;
var ERR = 2;
var MAX_COMPLEXITY = 10;
var MAX_FN_PARAMS = 5;
var MAX_FN_STATEMENTS = 20;
var MAX_LINE_LENGTH = 140;
var MAX_NESTED_CALLBACKS = 3;
var TAB_WIDTH = 4;

module.exports = {
    extends: "eslint:recommended",
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 6
    },

    globals: {
        document: false,
        navigator: false,
        window: false
    },

    rules: {
        // Best Practices
        "block-scoped-var": ERR,
        "complexity": [ERR, MAX_COMPLEXITY],
        "curly": ERR,
        "eqeqeq": [ERR, "smart"],
        "no-alert": ERR,
        "no-caller": ERR,
        "no-case-declarations": ERR,
        "no-empty-pattern": ERR,
        "no-eval": ERR,
        "no-extend-native": ERR,
        "no-labels": ERR,
        "no-lone-blocks": ERR,
        "no-loop-func": ERR,
        "no-magic-numbers": ERR,
        "no-native-reassign": ERR,
        "no-new-func": ERR,
        "no-new-wrappers": ERR,
        "no-octal-escape": ERR,
        "no-return-assign": ERR,
        "no-script-url": ERR,
        "no-unused-expressions": ERR,
        "no-useless-call": ERR,
        "no-warning-comments": ERR,
        "no-with": ERR,
        "wrap-iife": [ERR, "inside"],

        // Variables
        "no-catch-shadow": ERR,
        "no-shadow-restricted-names": ERR,
        "no-undef": ERR,
        "no-use-before-define": [ERR, "nofunc"],

        // Stylistic issues
        "array-bracket-spacing": ERR,
        "block-spacing": ERR,
        "brace-style": [ERR, "1tbs", { allowSingleLine: true }],
        "camelcase": ERR,
        "comma-spacing": ERR,
        "comma-style": ERR,
        "computed-property-spacing": ERR,
        "func-style": [ERR, "declaration"],
        "indent": ERR,
        "key-spacing": [ERR, { beforeColon: false, afterColon: true, mode: "minimum" }], //enforce spacing between keys and values in object literal properties
        "max-depth": ERR, //specify the maximum depth that blocks can be nested
        "max-len": [ERR, MAX_LINE_LENGTH, TAB_WIDTH, { ignoreComments: true, ignoreUrls: true }], //specify the maximum length of a line in your program
        "max-nested-callbacks": [ERR, MAX_NESTED_CALLBACKS], //specify the maximum depth callbacks can be nested
        "max-params": [ERR, MAX_FN_PARAMS], //limits the number of parameters that can be used in the function declaration.
        "max-statements": [ERR, MAX_FN_STATEMENTS], //specify the maximum number of statement allowed in a function
        "new-cap": ERR, //require a capital letter for constructors
        "new-parens": ERR, //disallow the omission of parentheses when invoking a constructor with no arguments
        "no-array-constructor": ERR, //disallow use of the Array constructor
        "no-lonely-if": ERR, //disallow if as the only statement in an else block
        "no-nested-ternary": ERR, //disallow nested ternary expressions
        "no-new-object": ERR, //disallow the use of the Object constructor
        "no-spaced-func": ERR, //disallow space between function identifier and application
        "no-trailing-spaces": ERR, //disallow trailing whitespace at the end of lines
        "no-unneeded-ternary": ERR, //disallow the use of ternary operators when a simpler alternative exists
        "object-curly-spacing": [ERR, "always"], //require or disallow padding inside curly braces

        //"one-var": ERR, //require or disallow one variable declaration per function

        "quote-props": [ERR, "consistent-as-needed"], //require quotes around object literal property names
        //"quotes": [ERR, "", "avoid-escape"], //specify whether backticks, double or single quotes should be used
        "semi-spacing": ERR, //enforce spacing before and after semicolons
        "semi": ERR, //require or disallow use of semicolons instead of ASI
        //deprecated "space-after-keywords": ERR, //require a space after certain keywords
        //deprecated "space-before-blocks": ERR, //require or disallow a space before blocks
        "keyword-spacing": ERR,
        "space-before-function-paren": [ERR, "always"], //require or disallow a space before function opening parenthesis
        //deprecated "space-before-keywords": ERR, //require a space before certain keywords
        "space-in-parens": ERR, //require or disallow spaces inside parentheses
        "space-infix-ops": ERR, //require spaces around operators
        "space-unary-ops": ERR, //require or disallow spaces before/after unary operators

        // EcmaScript 6
        "arrow-body-style": ERR, //require braces in arrow function body
        //"arrow-parens": ERR, //require parens in arrow function arguments
        "arrow-spacing": ERR, //require space before/after arrow function's arrow
        "generator-star-spacing": ERR, //enforce spacing around the * in generator functions
        "no-confusing-arrow": ERR, //disallow arrow functions where they could be confused with comparisons
        "no-useless-constructor": ERR, //disallow unnecessary constructor
        //"no-var": ERR, //require let or const instead of var
        //"object-shorthand": ERR, //require method and property shorthand syntax for object literals
        "prefer-arrow-callback": DISABLED, //suggest using arrow functions as callbacks
        "prefer-const": ERR, //suggest using const declaration for variables that are never modified after declared
        "prefer-reflect": DISABLED, //suggest using Reflect methods where applicable
        "prefer-rest-params": ERR, //suggest using the rest parameters instead of arguments
        "prefer-spread": ERR, //suggest using the spread operator instead of .apply()
        "prefer-template": ERR, //suggest using template literals instead of strings concatenation
        "require-yield": ERR, //disallow generator functions that do not have yield
        "template-curly-spacing": ERR //enforce spacing around embedded expressions of template strings
        //"yield-star-spacing": [ERR, {"before": true, "after": false}] //enforce spacing around the * in yield* expressions
    }
};
