const colors = {
  primary: '#ff00ff',
  light: '#ffffff',
  dark: '#252525',
};

// const fonts = {
//   base: 'Helvetica, sans-serif',
//   serif: 'Georgia, serif',
// };

// const sizeScale = {
//   '300': '0.8rem',
//   '400': '1rem',
//   '500': '1.25rem',
//   '600': '1.56rem',
//   '700': '1.95rem',
//   '800': '2.44rem',
//   '900': '3.05rem',
// };

module.exports = {
  colors,
  // sizeScale,
  // fonts,
  generateCustomProperties: true,
  utilities: {
    'bg': {
      output: 'standard',
      property: 'background',
    },
    'color': {
      output: 'standard',
      property: 'color',
    },
    'f-family': {
      output: 'standard',
      property: 'font-family',
    },
    'ml': {
      items: '',
      output: 'responsive',
      property: 'margin-left',
    },
    'mr': {
      items: '',
      output: 'responsive',
      property: 'margin-right',
    },
    'mt': {
      items: '',
      output: 'responsive',
      property: 'margin-top',
    },
    'mb': {
      output: 'responsive',
      property: 'margin-bottom',
    },
    'lh': {
      output: 'standard',
      property: 'line-height',
    },
    'max-w': {
      output: 'responsive',
      property: 'max-width',
    },
    'pt': {
      output: 'responsive',
      property: 'padding-top',
    },
    'pb': {
      output: 'responsive',
      property: 'padding-bottom',
    },
    'pl': {
      output: 'responsive',
      property: 'padding-left',
    },
    'pr': {
      output: 'responsive',
      property: 'padding-right',
    },
    'fsize': {
      output: 'responsive',
      property: 'font-size',
    },
    'fweight': {
      output: 'standard',
      property: 'font-weight',
    },
    'position': {
      output: 'responsive',
      property: 'position',
    },
    'inset': {
      output: 'responsive',
      property: 'inset',
    },
  },
  breakpoints: {
    xsm: '30em',
    sm: '48em',
    md: '60em',
    xlg: '100em',
  },
};
