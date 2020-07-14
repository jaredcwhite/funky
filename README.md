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

You can use also use `npx` to run the CLI as-a-service:

```bash
npx @native-elements/funky --out path/to/utilities.css
```

## How it works

Funky takes a configuration object and use it to generate class-less css utilities by using custom properties. By using the following declaration:

```js
'm': {
  type: 'responsive',
  property: 'margin',
}
```

Funky takes that and generates the following CSS:

```css
[style*='--m:'] {
  margin: var(--m);
}
```

If we set the `type` to be `responsive` instead of `standard`, we'll get this:

```css
[style*='--m:'] {
  margin: var(--m);
}

@media (width >= 30em) {
  [style*='--sm-m:'] {
    margin: var(--sm-m);
  }

  [style*='--md-m:'] {
    margin: var(--md-m);
  }

  [style*='--lg-m:'] {
    margin: var(--lg-m);
  }
}
```

## Configuration

The CLI will use a [default configuration](src/config.js) when you don't provide yours.

You can fully customize Funky by creating a file at the root of your project called `funky.config.js`.

### New configuration

You may don't need all the utilities that are generated with the default configuration, so if you want to create a new set from scratch, export a new object from the configuration file, following this schema:

```js
module.exports = {
  breakpoints: {
    ultralarge: '120em',
  },
  utilities: {
    res: {
      type: 'responsive',
      property: 'resize',
    },
  },
};
```

The above configuration will generate only the specified utilities and breakpoints, dropping everything else that comes from the default configuration:

```css
[style*='--res:'] {
  resize: var(--res);
}

@media (width >= 120em) {
  [style*='--ultralarge-res:'] {
    resize: var(--ultralarge-res);
  }
}
```

### Extending the default configuration

If you are ok with the default configuration but you need to add more utilities, you can extend the built-in config by importing it and exporting a new object from your `funky.config.js`:

```js
const {breakpoints, utilities} = require('@native-elements/funky/config.js');

module.exports = {
  breakpoints: {
    ...breakpoints,
    ultralarge: '120em',
  },
  utilities: {
    ...utilities,
    res: {
      type: 'responsive',
      property: 'resize',
    },
  },
};
```

By this way the CLI will merge the default configurations with ones provided by your configuration file.
