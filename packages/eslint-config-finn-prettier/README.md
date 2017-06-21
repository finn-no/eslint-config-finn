# eslint-config-prettier [![Build Status](https://travis-ci.org/finn-no/eslint-config-finn.svg)](https://travis-ci.org/finn-no/eslint-config-finn)

[ESLint](http://eslint.org/) prettier config for @Finn-no

## How to use it

First, install the npm package:

```bash
npm install --save-dev eslint-config-finn-prettier
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "finn-prettier"
}
```

This overrides all style rules defined above it, and uses `{ tabWidth: 4, singleQuote: true, trailingComma: 'es5' }` as options.

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.

## React
If you use React, do `"extends": "finn-prettier/react"` instead to work with `eslint-plugin-react`.

## Publishing

```bash
$ npm version <patch | minor | major>
$ git push --follow-tags origin master
$ npm publish
```
