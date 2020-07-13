## Getting started

First up, install:

```bash
npm install @native-elements/funky
```

Then run Funky and determine your CSS output:

```bash
funky --out src/css/tokens.css
```

⚠️ You have to set a CSS file output for it to work properly.

## Config

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
