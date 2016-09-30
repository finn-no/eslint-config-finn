# Rules

## [constructor-super](http://eslint.org/docs/rules/constructor-super)
Verify calls of `super()` in constructors (constructor-super)


## [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super)
Disallow use of `this`/`super` before calling `super()` in constructors. (no-this-before-super)


## [no-var](http://eslint.org/docs/rules/no-var)
require `let` or `const` instead of `var` (no-var)


## [object-shorthand](http://eslint.org/docs/rules/object-shorthand)
Require Object Literal Shorthand Syntax (object-shorthand)

### Available options
* `"always"` expects that the shorthand will be used whenever possible.
* `"methods"` ensures the method shorthand is used (also applies to generators).
* `"properties` ensures the property shorthand is used (where the key and variable name match).
* `"never"` ensures that no property or method shorthand is used in any object literal.


## [prefer-const](http://eslint.org/docs/rules/prefer-const)
Suggest using `const` (prefer-const)

### Available options
* `"any"` (default) - If any variables in destructuring should be `const`, this rule warns for those variables.
* `"all"` - If all variables in destructuring should be `const`, this rule warns the variables. Otherwise, ignores them.


## [strict](http://eslint.org/docs/rules/strict)
require or disallow strict mode directives (strict)

### Available options
* `"global"` if ESLint considers a file to be a **CommonJS** module
* `"function"` otherwise
* `"global"` requires one strict mode directive in the global scope (and disallows any other strict mode directives)
* `"function"` requires one strict mode directive in each top-level function declaration or expression (and disallows any other strict mode directives)
* `"never"` disallows strict mode directives
* `node` or `commonjs` [environments](../user-guide/configuring#specifying-environments)
* `"globalReturn": true` property in the `ecmaFeatures` object of [parser options](../user-guide/configuring#specifying-parser-options)

### Current options
  * safe

## [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)
disallow confusing multiline expressions (no-unexpected-multiline)


## [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)
Enforces getter/setter pairs in objects (accessor-pairs)

### Available options
* `setWithoutGet` set to `true` will warn for setters without getters (Default `true`).
* `getWithoutSet` set to `true` will warn for getters without setters (Default `false`).


## [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)
Treat var as Block Scoped (block-scoped-var)


## [curly](http://eslint.org/docs/rules/curly)
Require Following Curly Brace Conventions (curly)


## [dot-notation](http://eslint.org/docs/rules/dot-notation)
Require Dot Notation (dot-notation)

### Available options
* Set the `allowKeywords` option to `false` (default is `true`) to follow ECMAScript version 3 compatible style, avoiding dot notation for reserved word properties.
* Set the `allowPattern` option to a regular expression string to allow bracket notation for property names that match a pattern (by default, no pattern is tested).


## [eqeqeq](http://eslint.org/docs/rules/eqeqeq)
Require === and !== (eqeqeq)

### Available options
* Comparing two literal values
* Evaluating the value of `typeof`
* Comparing against `null`

### Current options
  * smart

## [guard-for-in](http://eslint.org/docs/rules/guard-for-in)
Require Guarding for-in (guard-for-in)


## [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)
enforce consistent spacing before and after keywords (keyword-spacing)

### Available options
* `"before": true` (default) requires at least one space before keywords
* `"before": false` disallows spaces before keywords
* `"after": true` (default) requires at least one space after keywords
* `"after": false` disallows spaces after keywords
* `"overrides"` allows overriding spacing style for specified keywords


## [no-alert](http://eslint.org/docs/rules/no-alert)
Disallow Use of Alert (no-alert)


## [no-caller](http://eslint.org/docs/rules/no-caller)
Disallow Use of caller/callee (no-caller)


## [no-div-regex](http://eslint.org/docs/rules/no-div-regex)
Disallow Regexs That Look Like Division (no-div-regex)


## [no-eval](http://eslint.org/docs/rules/no-eval)
Disallow eval() (no-eval)


## [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)
Disallow unnecessary function binding (no-extra-bind)


## [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough)
Disallow Case Statement Fallthrough (no-fallthrough)

### Available options
* Set the `commentPattern` option to a regular expression string to change the test for intentional fallthrough comment


## [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)
Disallow Floating Decimals (no-floating-decimal)


## [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)
Disallow Implied eval() (no-implied-eval)


## [no-iterator](http://eslint.org/docs/rules/no-iterator)
Disallow Iterator (no-iterator)


## [no-labels](http://eslint.org/docs/rules/no-labels)
Disallow Labeled Statements (no-labels)

### Available options
* `"allowLoop"` (`boolean`, default is `false`) - If this option was set `true`, this rule ignores labels which are sticking to loop statements.
* `"allowSwitch"` (`boolean`, default is `false`) - If this option was set `true`, this rule ignores labels which are sticking to switch statements.


## [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)
Disallow Unnecessary Nested Blocks (no-lone-blocks)


## [no-loop-func](http://eslint.org/docs/rules/no-loop-func)
Disallow Functions in Loops (no-loop-func)


## [no-multi-str](http://eslint.org/docs/rules/no-multi-str)
Disallow Multiline Strings (no-multi-str)


## [no-native-reassign](http://eslint.org/docs/rules/no-native-reassign)
Disallow Reassignment of Native Objects (no-native-reassign)


## [no-new-func](http://eslint.org/docs/rules/no-new-func)
Disallow Function Constructor (no-new-func)


## [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)
Disallow Primitive Wrapper Instances (no-new-wrappers)


## [no-new](http://eslint.org/docs/rules/no-new)
Disallow new For Side Effects (no-new)


## [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)
disallow octal escape sequences in string literals (no-octal-escape)


## [no-octal](http://eslint.org/docs/rules/no-octal)
disallow octal literals (no-octal)


## [no-proto](http://eslint.org/docs/rules/no-proto)
Disallow Use of `__proto__` (no-proto)


## [no-redeclare](http://eslint.org/docs/rules/no-redeclare)
Disallow Redeclaring Variables (no-redeclare)


## [no-return-assign](http://eslint.org/docs/rules/no-return-assign)
Disallow Assignment in return Statement (no-return-assign)

### Available options
* `except-parens` (default): Disallow assignments unless they are enclosed in parentheses.
* `always`: Disallow all assignments.


## [no-script-url](http://eslint.org/docs/rules/no-script-url)
Disallow Script URLs (no-script-url)


## [no-self-compare](http://eslint.org/docs/rules/no-self-compare)
Disallow Self Compare (no-self-compare)


## [no-sequences](http://eslint.org/docs/rules/no-sequences)
Disallow Use of the Comma Operator (no-sequences)


## [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)
Restrict what can be thrown as an exception (no-throw-literal)


## [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)
Disallow Unused Expressions (no-unused-expressions)

### Available options
* `allowShortCircuit` set to `true` will allow you to use short circuit evaluations in your expressions (Default: `false`).
* `allowTernary` set to `true` will enable you use ternary operators in your expressions similarly to short circuit evaluations (Default: `false`).


## [no-void](http://eslint.org/docs/rules/no-void)
Disallow use of the void operator. (no-void)


## [wrap-iife](http://eslint.org/docs/rules/wrap-iife)
Require IIFEs to be Wrapped (wrap-iife)

### Available options
* `"outside"` enforces always wrapping the *call* expression. The default is `"outside"`.
* `"inside"` enforces always wrapping the *function* expression.
* `"any"` enforces always wrapping, but allows either style.

### Current options
  * inside

## [no-delete-var](http://eslint.org/docs/rules/no-delete-var)
disallow deleting variables (no-delete-var)


## [no-shadow](http://eslint.org/docs/rules/no-shadow)
Disallow Shadowing (no-shadow)

### Available options
* `functions` (by default) - reports shadowing before the outer functions are defined.
* `all` - reports all shadowing before the outer variables/functions are defined.
* `never` - never report shadowing before the outer variables/functions are defined.

### Current options
  * builtinGlobals = true
  * allow = resolve,reject,cb,err

## [no-undef-init](http://eslint.org/docs/rules/no-undef-init)
Disallow Initializing to undefined (no-undef-init)


## [no-undef](http://eslint.org/docs/rules/no-undef)
Disallow Undeclared Variables (no-undef)

### Available options
* `typeof` set to true will warn for variables used inside typeof check (Default false).


## [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)
Disallow Unused Variables (no-unused-vars)

### Available options
* `all` checks all variables for usage, including those in the global scope. This is the default setting.
* `local` checks only that locally-declared variables are used but will allow global variables to be unused.
* `after-used` - only the last argument must be used. This allows you, for instance, to have two named parameters to a function and as long as you use the second argument, ESLint will not warn you about the first. This is the default setting.
* `all` - all named arguments must be used.
* `none` - do not check arguments.
* `none` - do not check error objects. This is the default setting.
* `all` - all named arguments must be used.


## [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)
Disallow Early Use (no-use-before-define)

### Available options
* `functions` (`boolean`) - The flag which shows whether or not this rule checks function declarations. If this is `true`, this rule warns every reference to a function before the function declaration. Otherwise, ignores those references. Function declarations are hoisted, so it's safe. Default is `true`.
* `classes` (`boolean`) - The flag which shows whether or not this rule checks class declarations of upper scopes. If this is `true`, this rule warns every reference to a class before the class declaration. Otherwise, ignores those references if the declaration is in upper function scopes. Class declarations are not hoisted, so it might be danger. Default is `true`.

### Current options
  * functions = false

## [brace-style](http://eslint.org/docs/rules/brace-style)
Require Brace Style (brace-style)

### Available options
* `"1tbs"` (default) enforces one true brace style
* `"stroustrup"` enforces Stroustrup style
* `"allman"` enforces Allman style
* `"allowSingleLine": true` (default `false`) allows the opening and closing braces for a block to be on the *same* line

### Current options
  * 1tbs
  * allowSingleLine = true

## [camelcase](http://eslint.org/docs/rules/camelcase)
Require Camelcase (camelcase)

### Available options
* `"properties": "always"` (default) enforces camelcase style for property names
* `"properties": "never"` does not check property names

### Current options
  * properties = always

## [comma-spacing](http://eslint.org/docs/rules/comma-spacing)
Enforces spacing around commas (comma-spacing)

### Available options
* `"before": false` (default) disallows spaces before commas
* `"before": true` requires one or more spaces before commas
* `"after": true` (default) requires one or more spaces after commas
* `"after": false` disallows spaces after commas

### Current options
  * before = false
  * after = true

## [comma-style](http://eslint.org/docs/rules/comma-style)
Comma style (comma-style)

### Available options
* `"last"` (default) requires a comma after and on the same line as an array element, object property, or variable declaration
* `"first"` requires a comma before and on the same line as an array element, object property, or variable declaration
* `"ArrayExpression": true` ignores comma style in array literals
* `"ObjectExpression": true` ignores comma style in object literals
* `"VariableDeclaration": true` ignores comma style in variable declarations

### Current options
  * last

## [consistent-this](http://eslint.org/docs/rules/consistent-this)
Require Consistent This (consistent-this)

### Available options
* designated alias names for `this` (default `"that"`)

### Current options
  * self

## [eol-last](http://eslint.org/docs/rules/eol-last)
Require file to end with single newline (eol-last)

### Available options
* `"unix"` (default) enforces line feed (LF) as newline
* `"windows"` enforces carriage return line feed (CRLF) as newline


## [indent](http://eslint.org/docs/rules/indent)
enforce consistent indentation (indent)

### Available options
* `"SwitchCase"` (default: 0) enforces indentation level for `case` clauses in `switch` statements
* `"VariableDeclarator"` (default: 1) enforces indentation level for `var` declarators; can also take an object to define separate rules for `var`, `let` and `const` declarations.
* Indent of 4 spaces with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 8 spaces.
* Indent of 2 spaces with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 4 spaces.
* Indent of 2 spaces with `VariableDeclarator` set to `{"var": 2, "let": 2, "const": 3}` will indent the multi-line variable declarations with 4 spaces for `var` and `let`, 6 spaces for `const` statements.
* Indent of tab with `VariableDeclarator` set to `2` will indent the multi-line variable declarations with 2 tabs.
* Indent of 2 spaces with `SwitchCase` set to `0` will not indent `case` clauses with respect to `switch` statements.
* Indent of 2 spaces with `SwitchCase` set to `2` will indent `case` clauses with 4 spaces with respect to `switch` statements.
* Indent of tabs with `SwitchCase` set to `2` will indent `case` clauses with 2 tabs with respect to `switch` statements.

### Current options
  * 4
  * SwitchCase = 1

## [key-spacing](http://eslint.org/docs/rules/key-spacing)
enforce consistent spacing between keys and values in object literal properties (key-spacing)

### Available options
* `"beforeColon": false` (default) disallows spaces between the key and the colon in object literals
* `"beforeColon": true` requires at least one space between the key and the colon in object literals
* `"afterColon": true` (default) requires at least one space between the colon and the value in object literals
* `"afterColon": false` disallows spaces between the colon and the value in object literals
* `"mode": strict` (default) enforces exactly one space before or after colons in object literals
* `"mode": minimum` enforces one or more spaces before or after colons in object literals
* `"align": "value"` enforces horizontal alignment of values in object literals
* `"align": "colon"` enforces horizontal alignment of both colons and values in object literals.
* `"singleLine"` specifies a spacing style for single-line object literals
* `"multiLine"` specifies a spacing style for multi-line object literals

### Current options
  * beforeColon = false
  * afterColon = true

## [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks)
enforce a maximum depth that callbacks can be nested (max-nested-callbacks)

### Available options
* `"max"` (default `10`) enforces a maximum depth that callbacks can be nested

### Current options
  * 5

## [new-cap](http://eslint.org/docs/rules/new-cap)
require constructor `function` names to begin with a capital letter (new-cap)

### Available options
* `"newIsCap": true` (default) requires all `new` operators to be called with uppercase-started functions.
* `"newIsCap": false` allows `new` operators to be called with lowercase-started or uppercase-started functions.
* `"capIsNew": true` (default) requires all uppercase-started functions to be called with `new` operators.
* `"capIsNew": false` allows uppercase-started functions to be called without `new` operators.
* `"newIsCapExceptions"` allows specified lowercase-started function names to be called with the `new` operator.
* `"capIsNewExceptions"` allows specified uppercase-started function names to be called without the `new` operator.
* `"properties": true` (default) enables checks on object properties
* `"properties": false` disables checks on object properties


## [new-parens](http://eslint.org/docs/rules/new-parens)
require parentheses when invoking a constructor with no arguments (new-parens)


## [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)
disallow `Array` constructors (no-array-constructor)


## [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if)
disallow `if` statements as the only statement in `else` blocks (no-lonely-if)


## [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)
disallow multiple empty lines (no-multiple-empty-lines)

### Available options
* `"max"` (default: `2`) enforces a maximum number of consecutive empty lines.
* `"maxEOF"` enforces a maximum number of consecutive empty lines at the end of files.
* `"maxBOF"` enforces a maximum number of consecutive empty lines at the beginning of files.

### Current options
  * max = 2

## [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary)
disallow nested ternary expressions (no-nested-ternary)


## [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)
Disallow or enforce spaces inside of curly braces in objects. (object-curly-spacing)

### Available options
* `"always"` enforces a space inside of curly braces
* `"never"` disallows spaces inside of curly braces (default)

### Current options
  * always

## [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary)
Disallow conditional expressions that can be expressed with simpler constructs (no-unneeded-ternary)


## [operator-assignment](http://eslint.org/docs/rules/operator-assignment)
Operator Assignment Shorthand (operator-assignment)

### Current options
  * always

## [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)
Operator Linebreak (operator-linebreak)

### Current options
  * after

## [padded-blocks](http://eslint.org/docs/rules/padded-blocks)
Enforce padding within blocks (padded-blocks)

### Current options
  * never

## [quotes](http://eslint.org/docs/rules/quotes)
Enforce Quote Style (quotes)

### Current options
  * single
  * avoidEscape = true

## [semi](http://eslint.org/docs/rules/semi)
Enforce or Disallow Semicolons (semi)

### Current options
  * always

## [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)
Require Or Disallow Space Before Blocks (space-before-blocks)

### Current options
  * always

## [spaced-comment](http://eslint.org/docs/rules/spaced-comment)
Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)

### Current options
  * always
  * exceptions = eslint-disable,global,eslint,eslint-env

## [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing)
Disallow or enforce spaces inside of brackets (array-bracket-spacing)

### Available options
* `"never"` (default) disallows spaces inside array brackets
* `"always"` requires one or more spaces or newlines inside array brackets
* `"singleValue": true` requires one or more spaces or newlines inside brackets of array literals that contain a single element
* `"objectsInArrays": true` requires one or more spaces or newlines between brackets of array literals and braces of their object literal elements `[ {` or `} ]`
* `"arraysInArrays": true` requires one or more spaces or newlines between brackets of array literals and brackets of their array literal elements `[ [` or `] ]`
* `"singleValue": false` disallows spaces inside brackets of array literals that contain a single element
* `"objectsInArrays": false` disallows spaces between brackets of array literals and braces of their object literal elements `[{` or `}]`
* `"arraysInArrays": false` disallows spaces between brackets of array literals and brackets of their array literal elements `[[` or `]]`
* `"never"` (and also the exceptions to the `"always"` option) allows newlines inside array brackets, because this is a common pattern
* `"always"` does not require spaces or newlines in empty array literals `[]`


## [array-callback-return](http://eslint.org/docs/rules/array-callback-return)
Enforces return statements in callbacks of array's methods (array-callback-return)


## [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style)
Require braces in arrow function body (arrow-body-style)

### Available options
* `"always"` enforces braces around the function body
* `"as-needed"` enforces no braces where they can be omitted (default)
* `"never"` enforces no braces around the function body (constrains arrow functions to the role of returning an expression)

### Current options
  * as-needed

## [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing)
Require space before/after arrow function's arrow (arrow-spacing)


## [block-spacing](http://eslint.org/docs/rules/block-spacing)
Disallow or enforce spaces inside of single line blocks (block-spacing)

### Available options
* `"always"` (default) requires one or more spaces
* `"never"` disallows spaces


## [comma-dangle](http://eslint.org/docs/rules/comma-dangle)
require or disallow trailing commas (comma-dangle)

### Available options
* `"never"` (default) disallows trailing commas
* `"always"` requires trailing commas
* `"always-multiline"` requires trailing commas when the last element or property is in a *different* line than the closing `]` or `}` and disallows trailing commas when the last element or property is on the *same* line as the closing `]` or `}`
* `"only-multiline"` allows (but does not require) trailing commas when the last element or property is in a *different* line than the closing `]` or `}` and disallows trailing commas when the last element or property is on the *same* line as the closing `]` or `}`

### Current options
  * always-multiline

## [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing)
Disallow or enforce spaces inside of computed properties (computed-property-spacing)

### Available options
* `"never"` (default) disallows spaces inside computed property brackets
* `"always"` requires one or more spaces inside computed property brackets


## [max-depth](http://eslint.org/docs/rules/max-depth)
enforce a maximum depth that blocks can be nested (max-depth)

### Available options
* `"max"` (default `4`) enforces a maximum depth that blocks can be nested


## [max-len](http://eslint.org/docs/rules/max-len)
enforce a maximum line length (max-len)

### Available options
* `"code"` (default `80`) enforces a maximum line length
* `"tabWidth"` (default `4`) specifies the character width for tab characters
* `"comments"` enforces a maximum line length for comments; defaults to value of `code`
* `"ignorePattern"` ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON
* `"ignoreComments": true` ignores all trailing comments and comments on their own line
* `"ignoreTrailingComments": true` ignores only trailing comments
* `"ignoreUrls": true` ignores lines that contain a URL

### Current options
  * code = 140
  * ignoreTrailingComments = true
  * ignoreUrls = true

## [max-params](http://eslint.org/docs/rules/max-params)
enforce a maximum number of parameters in `function` definitions (max-params)

### Available options
* `"max"` (default `3`) enforces a maximum number of parameters in function definitions

### Current options
  * 5

## [newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call)
require a newline after each call in a method chain (newline-per-chained-call)

### Available options
* `"ignoreChainWithDepth"` (default: `2`) allows chains up to a specified depth.


## [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)
Disallow lexical declarations in case/default clauses (no-case-declarations)


## [no-class-assign](http://eslint.org/docs/rules/no-class-assign)
Disallow modifying variables of class declarations (no-class-assign)


## [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign)
disallow assignment operators in conditional statements (no-cond-assign)

### Available options
* `"except-parens"` (default) allows assignments in test conditions *only if* they are enclosed in parentheses (for example, to allow reassigning a variable in the test of a `while` or `do...while` loop)
* `"always"` disallows all assignments in test conditions

### Current options
  * always

## [no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow)
Disallow arrow functions where they could be confused with comparisons (no-confusing-arrow)

### Available options
* `true` relaxes the rule and accepts parenthesis as a valid "confusion-preventing" syntax.
* `false` warns even if the expression is wrapped in parenthesis

### Current options
  * allowParens = true

## [no-console](http://eslint.org/docs/rules/no-console)
disallow the use of `console` (no-console)

### Available options
* `"allow"` has an array of strings which are allowed methods of the `console` object


## [no-debugger](http://eslint.org/docs/rules/no-debugger)
disallow the use of `debugger` (no-debugger)


## [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)
Disallow duplicate imports (no-duplicate-imports)


## [no-negated-condition](http://eslint.org/docs/rules/no-negated-condition)
disallow negated conditions (no-negated-condition)


## [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs)
disallow negating the left operand in `in` expressions (no-negated-in-lhs)


## [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)
Disallow Shadowing of Restricted Names (no-shadow-restricted-names)


## [no-spaced-func](http://eslint.org/docs/rules/no-spaced-func)
disallow spacing between `function` identifiers and their applications (no-spaced-func)


## [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)
Disallow trailing spaces at the end of lines (no-trailing-spaces)


## [no-useless-call](http://eslint.org/docs/rules/no-useless-call)
Disallow unnecessary `.call()` and `.apply()`. (no-useless-call)


## [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)
Disallow unnecessary escape usage (no-useless-escape)


## [one-var](http://eslint.org/docs/rules/one-var)
Require or Disallow One Variable Declaration per Scope (one-var)

### Available options
* `var`
* `let`
* `const`
* `uninitialized`
* `initialized`

### Current options
  * never

## [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback)
Suggest using arrow functions as callbacks. (prefer-arrow-callback)

### Current options
  * allowNamedFunctions = true

## [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params)
Suggest using the rest parameters instead of `arguments` (prefer-rest-params)


## [prefer-spread](http://eslint.org/docs/rules/prefer-spread)
Suggest using the spread operator instead of `.apply()`. (prefer-spread)


## [prefer-template](http://eslint.org/docs/rules/prefer-template)
Suggest using template literals instead of string concatenation. (prefer-template)


## [quote-props](http://eslint.org/docs/rules/quote-props)
Quoting Style for Property Names (quote-props)

### Current options
  * consistent-as-needed

## [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)
Require or disallow a space before function parenthesis (space-before-function-paren)


## [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops)
Require Spaces Around Infix Operators (space-infix-ops)


## [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)
Require or disallow spaces before/after unary operators (space-unary-ops)

### Available options
* `words` - applies to unary word operators such as: `new`, `delete`, `typeof`, `void`, `yield`
* `nonwords` - applies to unary operators such as: `-`, `+`, `--`, `++`, `!`, `!!`
* `overrides` - specifies overwriting usage of spacing for each operator, word or non word. This is empty by default, but can be used to enforce or disallow spacing around operators. For example:


## [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing)
Enforce Usage of Spacing in Template Strings (template-curly-spacing)

### Available options
* `"never"` (by default) - Disallows spaces inside of the curly brace pair.
* `"always"` - Requires one or more spaces inside of the curly brace pair.


## [yoda](http://eslint.org/docs/rules/yoda)
Require or disallow Yoda Conditions (yoda)

### Available options
* If it is the default `"never"`, then comparisons must never be Yoda conditions.
* If it is `"always"`, then the literal value must always come first.
* If the `"exceptRange"` property is `true`, the rule *allows* yoda conditions in range comparisons which are wrapped directly in parentheses, including the parentheses of an `if` or `while` condition. The default value is `false`. A *range* comparison tests whether a variable is inside or outside the range between two literal values.
* If the `"onlyEquality"` property is `true`, the rule reports yoda conditions *only* for the equality operators `==` and `===`. The default value is `false`.


