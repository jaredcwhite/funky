module.exports = {
  minify: true,
  breakpoints: {
    xsm: '30em',
    sm: '48em',
    md: '60em',
    lg: '100em',
  },
  utilities: {
    'align-c': {
      property: 'align-content',
      type: 'responsive',
    },
    'align-i': {
      property: 'align-items',
      type: 'responsive',
    },
    'align-s': {
      property: 'align-self',
      type: 'responsive',
    },
    'all': {
      property: 'all',
      type: 'standard',
    },
    'appearance': {
      property: 'appearance',
      type: 'standard',
    },
    'backdrop-f': {
      property: 'backdrop-filter',
      type: 'standard',
    },
    'bg': {
      property: 'background',
      states: ['hover', 'focus'],
      type: 'responsive',
    },
    'bg-a': {
      property: 'background-attachment',
      type: 'responsive',
    },
    'bg-c': {
      property: 'background-color',
      states: ['hover', 'focus'],
      type: 'responsive',
    },
    'bg-i': {
      property: 'background-image',
      type: 'responsive',
    },
    'bg-p': {
      property: 'background-position',
      type: 'responsive',
    },
    'bg-r': {
      property: 'background-repeat',
      type: 'responsive',
    },
    'bg-s': {
      property: 'background-size',
      type: 'responsive',
    },
    'blend': {
      property: 'mix-blend-mode',
      type: 'standard',
    },
    'border': {
      property: 'border',
      states: ['hover', 'focus'],
      type: 'responsive',
    },
    'border-b': {
      property: 'border-block-end',
      type: 'responsive',
    },
    'border-c': {
      property: 'border-color',
      states: ['hover', 'focus'],
      type: 'responsive',
    },
    'border-l': {
      property: 'border-inline-start',
      type: 'responsive',
    },
    'border-r': {
      property: 'border-inline-end',
      type: 'responsive',
    },
    'border-t': {
      property: 'border-block-start',
      type: 'responsive',
    },
    'bottom': {
      // property: 'inset-block-end',
      property: 'bottom',
      type: 'responsive',
    },
    'box-sizing': {
      property: 'box-sizing',
      type: 'standard',
    },
    'clip-p': {
      property: 'clip-path',
      type: 'standard',
    },
    'color': {
      property: 'color',
      states: ['hover', 'focus'],
      type: 'standard',
    },
    'column-c': {
      property: 'column-count',
      type: 'responsive',
    },
    'column-f': {
      property: 'column-fill',
      type: 'responsive',
    },
    'column-g': {
      property: 'column-gap',
      type: 'responsive',
    },
    'column-r': {
      property: 'column-rule',
      type: 'responsive',
    },
    'column-s': {
      property: 'column-span',
      type: 'responsive',
    },
    'cursor': {
      property: 'cursor',
      type: 'standard',
    },
    'display': {
      property: 'display',
      type: 'responsive',
    },
    'fill': {
      property: 'fill',
      states: ['hover'],
      type: 'standard',
    },
    'filter': {
      property: 'filter',
      type: 'standard',
    },
    'flex': {
      property: 'flex',
      type: 'responsive',
    },
    'flex-b': {
      property: 'flex-basis',
      type: 'responsive',
    },
    'flex-d': {
      property: 'flex-direction',
      type: 'responsive',
    },
    'flex-g': {
      property: 'flex-grow',
      type: 'responsive',
    },
    'flex-s': {
      property: 'flex-shrink',
      type: 'responsive',
    },
    'flex-w': {
      property: 'flex-wrap',
      type: 'responsive',
    },
    'font-f': {
      property: 'font-family',
      type: 'standard',
    },
    'font-s': {
      property: 'font-size',
      type: 'responsive',
    },
    'font-style': {
      property: 'font-style',
      type: 'standard',
    },
    'font-w': {
      property: 'font-weight',
      type: 'standard',
    },
    'grid': {
      property: 'grid',
      type: 'responsive',
    },
    'grid-auto-c': {
      property: 'grid-auto-columns',
      type: 'responsive',
    },
    'grid-auto-f': {
      property: 'grid-auto-flow',
      type: 'responsive',
    },
    'grid-auto-r': {
      property: 'grid-auto-rows',
      type: 'responsive',
    },
    'grid-c': {
      property: 'grid-column',
      type: 'responsive',
    },
    'grid-g': {
      property: 'grid-gap',
      type: 'responsive',
    },
    'grid-r': {
      property: 'grid-row',
      type: 'responsive',
    },
    'grid-template-c': {
      property: 'grid-template-columns',
      type: 'responsive',
    },
    'grid-template-r': {
      property: 'grid-template-rows',
      type: 'responsive',
    },
    'height': {
      property: 'block-size',
      type: 'responsive',
    },
    'inset': {
      property: 'inset',
      type: 'responsive',
    },
    'justify-c': {
      property: 'justify-content',
      type: 'responsive',
    },
    'left': {
      // property: 'inset-inline-start',
      property: 'left',
      type: 'responsive',
    },
    'letter-s': {
      property: 'letter-spacing',
      type: 'responsive',
    },
    'line-h': {
      property: 'line-height',
      type: 'standard',
    },
    'list-s': {
      property: 'list-style',
      type: 'standard',
    },
    'margin': {
      items: '',
      property: 'margin',
      type: 'responsive',
    },
    'margin-b': {
      property: 'margin-block-end',
      type: 'responsive',
    },
    'margin-l': {
      items: '',
      property: 'margin-inline-start',
      type: 'responsive',
    },
    'margin-r': {
      items: '',
      property: 'margin-inline-end',
      type: 'responsive',
    },
    'margin-t': {
      items: '',
      property: 'margin-block-start',
      type: 'responsive',
    },
    'mask': {
      property: 'mask',
      states: ['hover'],
      type: 'responsive',
    },
    'mask-i': {
      property: 'mask-image',
      states: ['hover'],
      type: 'responsive',
    },
    'mask-p': {
      property: 'mask-position',
      states: ['hover'],
      type: 'responsive',
    },
    'mask-r': {
      property: 'mask-repeat',
      type: 'responsive',
    },
    'mask-s': {
      property: 'mask-size',
      states: ['hover'],
      type: 'responsive',
    },
    'max-h': {
      property: 'max-block-size',
      type: 'responsive',
    },
    'max-w': {
      property: 'max-inline-size',
      type: 'responsive',
    },
    'min-h': {
      property: 'min-block-size',
      type: 'responsive',
    },
    'min-w': {
      property: 'min-inline-size',
      type: 'responsive',
    },
    'obj-f': {
      property: 'object-fit',
      type: 'responsive',
    },
    'obj-p': {
      property: 'object-position',
      type: 'responsive',
    },
    'opacity': {
      property: 'opacity',
      type: 'standard',
    },
    'order': {
      property: 'order',
      type: 'responsive',
    },
    'overflow': {
      property: 'overflow',
      type: 'standard',
    },
    'overflow-x': {
      property: 'overflow-x',
      type: 'standard',
    },
    'overflow-y': {
      property: 'overflow-y',
      type: 'standard',
    },
    'padding': {
      property: 'padding',
      type: 'responsive',
    },
    'padding-b': {
      property: 'padding-block-end',
      type: 'responsive',
    },
    'padding-l': {
      property: 'padding-inline-start',
      type: 'responsive',
    },
    'padding-r': {
      property: 'padding-inline-end',
      type: 'responsive',
    },
    'padding-t': {
      property: 'padding-block-start',
      type: 'responsive',
    },
    'place-c': {
      property: 'place-content',
      type: 'responsive',
    },
    'place-i': {
      property: 'place-items',
      type: 'responsive',
    },
    'pointer-e': {
      property: 'pointer-events',
      type: 'standard',
    },
    'position': {
      property: 'position',
      type: 'responsive',
    },
    'radius': {
      property: 'border-radius',
      type: 'responsive',
    },
    'right': {
      // property: 'inset-inline-end',
      property: 'right',
      type: 'responsive',
    },
    'scroll-b': {
      property: 'scroll-behavior',
      type: 'standard',
    },
    'shadow': {
      property: 'box-shadow',
      states: ['hover', 'focus'],
      type: 'standard',
    },
    'text-a': {
      property: 'text-align',
      type: 'responsive',
    },
    'text-d': {
      property: 'text-decoration',
      states: ['hover', 'focus'],
      type: 'standard',
    },
    'text-s': {
      property: 'text-shadow',
      type: 'standard',
    },
    'text-t': {
      property: 'text-transform',
      type: 'standard',
    },
    'top': {
      // property: 'inset-block-start',
      property: 'top',
      type: 'responsive',
    },
    'transform': {
      property: 'transform',
      states: ['hover'],
      type: 'responsive',
    },
    'transform-o': {
      property: 'transform-origin',
      states: ['hover'],
      type: 'responsive',
    },
    'transform-s': {
      property: 'transform-style',
      states: ['hover'],
      type: 'responsive',
    },
    'transition': {
      property: 'transition',
      type: 'standard',
    },
    'transition-d': {
      property: 'transition-duration',
      type: 'standard',
    },
    'transition-dly': {
      property: 'transition-delay',
      type: 'standard',
    },
    'transition-p': {
      property: 'transition-property',
      type: 'standard',
    },
    'transition-tf': {
      property: 'transition-timing-function',
      type: 'standard',
    },
    'user-s': {
      property: 'user-select',
      type: 'standard',
    },
    'vertical-a': {
      property: 'vertical-align',
      type: 'standard',
    },
    'visibilty': {
      property: 'visibility',
      type: 'responsive',
    },
    'white-s': {
      property: 'white-space',
      type: 'standard',
    },
    'width': {
      property: 'inline-size',
      type: 'responsive',
    },
    'word-b': {
      property: 'word-break',
      type: 'standard',
    },
    'writing-m': {
      property: 'writing-mode',
      type: 'responsive',
    },
    'z': {
      property: 'z-index',
      states: ['hover', 'focus'],
      type: 'standard',
    },
  },
};
