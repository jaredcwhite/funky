## Getting started

Funky is a CLI tool, you can install it globally or you can run it when you need it by using `npx`.

```bash
yarn add @native-elements/funky
```

If you prefer to use `npx`, skip to the [usage section](#usage)

### Usage

You can now run the `funky` command in your terminal to generate the utility css file based on the default configuration.

```bash
funky --out path/to/utilities.css
```

You can use also use `npx` to run the cli as-a-service:

```bash
npx @native-elements/funky --out path/to/utilities.css
```

## Configuration

The cli will use a [default configuration](src/config.js) when you don't provide yours.

You can fully customize Funky by creating a file at the root of your project called `funky.config.js`.

### Extending the default configuration

If you are ok with the default configuration but you need to add more utilities, you can extend the built-in config by importing it and exporting a new object from your `funky.config.js`:

```js
const defaultConfig = require('@native-elements/funky/config.js');

module.exports = {
  breakpoints: {
    ...defaultConfig.breakpoints,
    ultralarge: '120em',
  },
  utilities: {
    ...defaultConfig.utilities,
    res: {
      type: 'responsive',
      property: 'resize',
    },
  },
};
```

## Generated classes example

Let’s use the `leading` option from the default config for this. The config looks like this:

```js
```

Funky takes that and generates the following CSS:

```css
```

If I set the output to be `responsive` instead of `standard`, we get this:

```css
```
