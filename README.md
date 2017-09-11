# eslint-config-finn [![Build Status](https://travis-ci.org/finn-no/eslint-config-finn.svg)](https://travis-ci.org/finn-no/eslint-config-finn)

[ESLint](http://eslint.org/) config for @Finn-no

## How to use it

First, install the npm package:

```bash
npm install --save-dev eslint-config-finn
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "finn"
}
```

See [rules.md](rules.md) for descriptions and config of the rules.

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.

## Prettier
If you want to use Prettier, install `eslint-config-finn-prettier` as well. See its readme for configuration.

## React
If you use React, install `eslint-config-finn-react` as well.

## Publishing

```bash
$ git pull
$ yarn lerna publish
```
