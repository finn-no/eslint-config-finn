# Changelog

## 1.0.0-alpha.1

NB! The new rules are not set in stone. We might add new rules (a breaking change) while in 1.0.0 alpha stage.

* **Breaking** Update rules to ESLint 2.x. Not necessarily compatible with ESLint 1.x.
* **Breaking** Move eslintrc.js to index.js (only breaking if hard-coded path to eslintrc.js)
* **Breaking** Go over all rules. Some of the new rules might cause new ESLint errors.
* **Breaking** Enable ES6 by default.
* Add node-specific config. To use add `finn/node` to the extends array in `.eslintrc`.

## 0.0.2
* Fix invalid rule

## 0.0.1
* Create repository and add rules based on [standard](https://github.com/feross/eslint-config-standard).
