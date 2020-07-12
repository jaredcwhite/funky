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
const colors = {
  primary: '#ff00ff',
  light: '#ffffff',
  dark: '#252525',
};

const fonts = {
  base: 'Helvetica, sans-serif',
  serif: 'Georgia, serif',
};

const sizeScale = {
  '300': '0.8rem',
  '400': '1rem',
  '500': '1.25rem',
  '600': '1.56rem',
  '700': '1.95rem',
  '800': '2.44rem',
  '900': '3.05rem',
};

module.exports = {
  colors,
  sizeScale,
  fonts,
  generateCustomProperties: true,
  utilities: {
    'bg': {
      items: colors,
      output: 'standard',
      property: 'background',
    },
    'color': {
      items: colors,
      output: 'standard',
      property: 'color',
    },
    'font': {
      items: fonts,
      output: 'standard',
      property: 'font-family',
    },
    'gap-top': {
      items: sizeScale,
      output: 'standard',
      property: 'margin-top',
    },
    'gap-bottom': {
      items: sizeScale,
      output: 'standard',
      property: 'margin-bottom',
    },
    'leading': {
      items: {
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      output: 'standard',
      property: 'line-height',
    },
    'measure': {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch',
      },
      output: 'standard',
      property: 'max-width',
    },
    'pad-top': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-top',
    },
    'pad-bottom': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-bottom',
    },
    'pad-left': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-left',
    },
    'text': {
      items: sizeScale,
      output: 'responsive',
      property: 'font-size',
    },
    'weight': {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700',
      },
      output: 'standard',
      property: 'font-weight',
    },
  },
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
};
```

## Generated classes example

Let’s use the `leading` option from the default config for this. The config looks like this:

```js
'leading': {
  items: {
    tight: '1.2',
    mid: '1.5',
    loose: '1.7'
  },
  output: 'standard',
  property: 'line-height'
}
```

Funky takes that and generates the following CSS:

```css
.leading-tight {
  line-height: 1.2;
}

.leading-mid {
  line-height: 1.5;
}

.leading-loose {
  line-height: 1.7;
}
```

If I set the output to be `responsive` instead of `standard`, we get this:

```css
.leading-tight {
  line-height: 1.2;
}

.leading-mid {
  line-height: 1.5;
}

.leading-loose {
  line-height: 1.7;
}

@media (min-width: 48em) {
  .md\:leading-tight {
    line-height: 1.2;
  }

  .md\:leading-mid {
    line-height: 1.5;
  }

  .md\:leading-loose {
    line-height: 1.7;
  }
}

@media (min-width: 68em) {
  .lg\:leading-tight {
    line-height: 1.2;
  }

  .lg\:leading-mid {
    line-height: 1.5;
  }

  .lg\:leading-loose {
    line-height: 1.7;
  }
}
```
