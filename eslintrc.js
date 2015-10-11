{
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "modules": true,
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true,
        "experimentalObjectRestSpread": true,
    },

    "env": {
        "es6": true
    },

    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },

    "rules": {
        // Possible Errors
        "comma-dangle": [2, "never"], // disallow or enforce trailing commas (recommended)
        "no-cond-assign": 2, // disallow assignment in conditional expressions (recommended)
        "no-console": 0, // disallow use of console in the node environment (recommended)
        "no-constant-condition": 2, // disallow use of constant expressions in conditions (recommended)
        "no-control-regex": 2, // disallow control characters in regular expressions (recommended)
        "no-debugger": 2, // disallow use of debugger (recommended)
        "no-dupe-args": 2, // disallow duplicate arguments in functions (recommended)
        "no-dupe-keys": 2, // disallow duplicate keys when creating object literals (recommended)
        "no-duplicate-case": 2, // disallow a duplicate case label. (recommended)
        "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions (recommended)
        "no-empty": 2, // disallow empty statements (recommended)
        "no-ex-assign": 2, // disallow assigning to the exception in a catch block (recommended)
        "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context (recommended)
        "no-extra-parens": 2, // disallow unnecessary parentheses
        "no-extra-semi": 2, // disallow unnecessary semicolons (recommended)
        "no-func-assign": 2, // disallow overwriting functions written as function declarations (recommended)
        "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks (recommended)
        "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor (recommended)
        "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments (recommended)
        "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression (recommended)
        "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions (recommended)
        "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal (recommended)
        "no-sparse-arrays": 2, // disallow sparse arrays (recommended)
        "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement (recommended)
        "use-isnan": 2, // disallow comparisons with the value NaN (recommended)
        "valid-jsdoc": 2, // Ensure JSDoc comments are valid
        "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string (recommended)
        "no-unexpected-multiline": 2, // Avoid code that looks like two expressions but is actually one


        "accessor-pairs": 2, // ok
        "arrow-spacing": [2, { // ok
            "before": true,
            "after": true
        }],
        "brace-style": [2, "1tbs", {
            "allowSingleLine": true
        }],
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "comma-style": [2, "last"],
        "constructor-super": 2,
        "curly": [2, "multi-line"],
        "dot-location": [2, "property"],
        "eol-last": 2,
        "eqeqeq": [2, "allow-null"],
        "generator-star-spacing": [2, {
            "before": true,
            "after": true
        }],
        "handle-callback-err": [2, "^(err|error)$"],
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-caller": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty-label": 2,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "functions"],
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-implied-eval": 2,
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [2, {
            "max": 1
        }],
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-return-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-unexpected-multiline": 2,
        "no-unneeded-ternary": 2,
        "no-unreachable": 2,
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "none"
        }],
        "no-useless-call": 2,
        "no-with": 2,
        "one-var": [2, {
            "initialized": "never"
        }],
        "operator-linebreak": [2, "after"],
        "quotes": [2, "single", "avoid-escape"],
        "radix": 2,
        "require-yield": 2,
        "semi": [2, "always"],
        "space-after-keywords": [2, "always"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "always"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": [2, "always", {
            "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
        }],
        "use-isnan": 2,
        "valid-typeof": 2,
        "wrap-iife": [2, "any"],
        "yoda": [2, "never"]
    }
}
