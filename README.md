## Getting started

Funky is a CLI tool, you can install it globally or you can run it when you need it using `npx`.

```bash
npm install -g @native-elements/funky
```

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
