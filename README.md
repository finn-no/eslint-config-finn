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

## Publishing

```bash
$ npm version <patch | minor | major>
$ git push --follow-tags origin master
$ npm publish
```
