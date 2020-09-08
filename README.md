# Funky [![](https://img.shields.io/npm/v/@native-elements/funky.svg?label=&style=minimal&colorA=000000&colorB=1B84FF)](https://www.npmjs.org/package/@native-elements/funky)

The definitive tool to create your own class-less utility-first css.

## Getting started

Funky is a CLI tool, you can install it globally or you can run it when you need it by using `npx`.

```bash
yarn add @native-elements/funky
```

If you prefer to use it with `npx` and without installing, skip to the [usage section](#usage)

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

Funky takes a configuration object and use it to generate class-less css utilities by using custom properties. By using the following configuration:

```js
module.exports = {
  minify: false, // Default true
  outputPath: 'utilities.css',
  breakpoints: {
    sm: '48em',
    md: '60em',
    lg: '100em',
  },
  utilities: {
    m: {
      // 'responsive' || 'standard'
      type: 'standard',
      // Optional. Generate a variant for each status
      states: ['hover'],
      // CSS property name
      property: 'margin',
    },
  },
};
```

Funky takes that and generates the following CSS:

→ 📄**utilities.css**

```css
[style*='--m:'] {
  margin: var(--m);
}
[style*='--m-hover:']:hover {
  margin: var(--m-hover);
}
```

If we set the `type` to be `responsive` instead of `standard`, we'll get this:

→ 📄**utilities.css**

```css
[style*='--m:'] {
  margin: var(--m);
}

[style*='--m-hover:']:hover {
  margin: var(--m-hover);
}

@media (width >= 48em) {
  [style*='--m-sm:'] {
    margin: var(--m-sm);
  }
  [style*='--m-hover-sm:']:hover {
    margin: var(--m-hover-sm);
  }
}

@media (width >= 60em) {
  [style*='--m-md:'] {
    margin: var(--m-hover-md);
  }
  [style*='--m-hover-md:']:hover {
    margin: var(--m-hover-md);
  }
}

@media (width >= 100em) {
  [style*='--margin-lg:'] {
    margin: var(--margin-hover-lg);
  }
  [style*='--margin-hover-lg:']:hover {
    margin: var(--margin-hover-lg);
  }
}
```

## Configuration

The CLI will use a [default configuration](config.js) when you don't provide yours but you can fully customize Funky by creating a file at the root of your project called `funky.config.js`.

**Note that the default configuration is full logical properties oriented. So if you have to support obsolete softares, you have to provide your own configuration**

### New configuration

You may don't need all the utilities that are generated with the default configuration, so if you want to create a new set of utilities from scratch, export a new object from the configuration file, following this schema:

```js
module.exports = {
  minify: false,
  outputPath: 'path/to/utilities.css'
  breakpoints: {
    xlg: '120em',
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
  [style*='--res-xlg:'] {
    resize: var(--res-xlg);
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
    xlg: '120em',
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
