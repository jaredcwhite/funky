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

## Config

The cli will use a [default configuration](src/default/config.js) when you don't provide your one.

To customise the classes with your own config, create a file at the root of your project called `funky.config.js`.

### Default config

If you don’t define a config in your project, Funky will use the default config which is this:

```javascript
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
