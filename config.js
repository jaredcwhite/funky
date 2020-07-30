module.exports = {
  minify: true,
  breakpoints: {
    sm: '48em',
    md: '60em',
    lg: '100em',
  },
  utilities: {
    'color': {
      type: 'standard',
      states: ['hover', 'focus'],
      property: 'color',
    },
    'font-f': {
      type: 'standard',
      property: 'font-family',
    },
    'font-s': {
      type: 'responsive',
      property: 'font-size',
    },
    'font-style': {
      type: 'standard',
      property: 'font-style',
    },
    'font-w': {
      type: 'standard',
      property: 'font-weight',
    },
    'display': {
      type: 'responsive',
      property: 'display',
    },
    'margin': {
      items: '',
      type: 'responsive',
      property: 'margin',
    },
    'margin-l': {
      items: '',
      type: 'responsive',
      property: 'margin-inline-start',
    },
    'margin-r': {
      items: '',
      type: 'responsive',
      property: 'margin-inline-end',
    },
    'margin-t': {
      items: '',
      type: 'responsive',
      property: 'margin-block-start',
    },
    'margin-b': {
      type: 'responsive',
      property: 'margin-block-end',
    },
    'line-h': {
      type: 'standard',
      property: 'line-height',
    },
    'letter-s': {
      type: 'responsive',
      property: 'letter-spacing',
    },
    'min-w': {
      type: 'responsive',
      property: 'min-inline-size',
    },
    'max-w': {
      type: 'responsive',
      property: 'max-inline-size',
    },
    'width': {
      type: 'responsive',
      property: 'inline-size',
    },
    'min-h': {
      type: 'responsive',
      property: 'min-block-size',
    },
    'max-h': {
      type: 'responsive',
      property: 'max-block-size',
    },
    'height': {
      type: 'responsive',
      property: 'block-size',
    },
    'padding': {
      type: 'responsive',
      property: 'padding',
    },
    'padding-t': {
      type: 'responsive',
      property: 'padding-block-start',
    },
    'padding-b': {
      type: 'responsive',
      property: 'padding-block-end',
    },
    'padding-l': {
      type: 'responsive',
      property: 'padding-inline-start',
    },
    'padding-r': {
      type: 'responsive',
      property: 'padding-inline-end',
    },
    'position': {
      type: 'responsive',
      property: 'position',
    },
    'inset': {
      type: 'responsive',
      property: 'inset',
    },
    'top': {
      type: 'responsive',
      // property: 'inset-block-start',
      property: 'top',
    },
    'bottom': {
      type: 'responsive',
      // property: 'inset-block-end',
      property: 'bottom',
    },
    'left': {
      type: 'responsive',
      // property: 'inset-inline-start',
      property: 'left',
    },
    'right': {
      type: 'responsive',
      // property: 'inset-inline-end',
      property: 'right',
    },
    'all': {
      type: 'standard',
      property: 'all',
    },
    'align-c': {
      type: 'responsive',
      property: 'align-content',
    },
    'align-i': {
      type: 'responsive',
      property: 'align-items',
    },
    'align-s': {
      type: 'responsive',
      property: 'align-self',
    },
    'justify-c': {
      type: 'responsive',
      property: 'justify-content',
    },
    'place-i': {
      type: 'responsive',
      property: 'place-items',
    },
    'bg': {
      type: 'responsive',
      states: ['hover', 'focus'],
      property: 'background',
    },
    'bg-c': {
      type: 'responsive',
      states: ['hover', 'focus'],
      property: 'background-color',
    },
    'bg-a': {
      type: 'responsive',
      property: 'background-attachment',
    },
    'bg-i': {
      type: 'responsive',
      property: 'background-image',
    },
    'bg-p': {
      type: 'responsive',
      property: 'background-position',
    },
    'bg-r': {
      type: 'responsive',
      property: 'background-repeat',
    },
    'bg-s': {
      type: 'responsive',
      property: 'background-size',
    },
    'border': {
      type: 'responsive',
      states: ['hover', 'focus'],
      property: 'border',
    },
    'border-t': {
      type: 'responsive',
      property: 'border-block-start',
    },
    'border-b': {
      type: 'responsive',
      property: 'border-block-end',
    },
    'border-l': {
      type: 'responsive',
      property: 'border-inline-start',
    },
    'border-r': {
      type: 'responsive',
      property: 'border-inline-end',
    },
    'border-c': {
      type: 'responsive',
      states: ['hover', 'focus'],
      property: 'border-color',
    },
    'radius': {
      type: 'responsive',
      property: 'border-radius',
    },
    'box-sizing': {
      type: 'standard',
      property: 'box-sizing',
    },
    'shadow': {
      type: 'standard',
      states: ['hover', 'focus'],
      property: 'box-shadow',
    },
    'filter': {
      type: 'standard',
      property: 'filter',
    },
    'column-c': {
      type: 'responsive',
      property: 'column-count',
    },
    'column-f': {
      type: 'responsive',
      property: 'column-fill',
    },
    'column-g': {
      type: 'responsive',
      property: 'column-gap',
    },
    'column-r': {
      type: 'responsive',
      property: 'column-rule',
    },
    'column-s': {
      type: 'responsive',
      property: 'column-span',
    },
    'cursor': {
      type: 'standard',
      property: 'cursor',
    },
    'flex': {
      type: 'responsive',
      property: 'flex',
    },
    'flex-b': {
      type: 'responsive',
      property: 'flex-basis',
    },
    'flex-d': {
      type: 'responsive',
      property: 'flex-direction',
    },
    'flex-g': {
      type: 'responsive',
      property: 'flex-grow',
    },
    'flex-s': {
      type: 'responsive',
      property: 'flex-shrink',
    },
    'flex-w': {
      type: 'responsive',
      property: 'flex-wrap',
    },
    'grid': {
      type: 'responsive',
      property: 'grid',
    },
    'grid-auto-c': {
      type: 'responsive',
      property: 'grid-auto-columns',
    },
    'grid-auto-f': {
      type: 'responsive',
      property: 'grid-auto-flow',
    },
    'grid-auto-r': {
      type: 'responsive',
      property: 'grid-auto-rows',
    },
    'grid-c': {
      type: 'responsive',
      property: 'grid-column',
    },
    'grid-g': {
      type: 'responsive',
      property: 'grid-gap',
    },
    'grid-r': {
      type: 'responsive',
      property: 'grid-row',
    },
    'grid-template-c': {
      type: 'responsive',
      property: 'grid-template-columns',
    },
    'grid-template-r': {
      type: 'responsive',
      property: 'grid-template-rows',
    },
    'obj-f': {
      type: 'responsive',
      property: 'object-fit',
    },
    'obj-p': {
      type: 'responsive',
      property: 'object-position',
    },
    'opacity': {
      type: 'standard',
      property: 'opacity',
    },
    'order': {
      type: 'responsive',
      property: 'order',
    },
    'overflow': {
      type: 'standard',
      property: 'overflow',
    },
    'overflow-x': {
      type: 'standard',
      property: 'overflow-x',
    },
    'overflow-y': {
      type: 'standard',
      property: 'overflow-y',
    },
    'pointer-e': {
      type: 'standard',
      property: 'pointer-events',
    },
    'scroll-b': {
      type: 'standard',
      property: 'scroll-behavior',
    },
    'text-a': {
      type: 'standard',
      property: 'text-align',
    },
    'text-d': {
      type: 'standard',
      states: ['hover', 'focus'],
      property: 'text-decoration',
    },
    'text-s': {
      type: 'standard',
      property: 'text-shadow',
    },
    'text-t': {
      type: 'standard',
      property: 'text-transform',
    },
    'transform': {
      type: 'responsive',
      states: ['hover'],
      property: 'transform',
    },
    'transform-o': {
      type: 'responsive',
      states: ['hover'],
      property: 'transform-origin',
    },
    'transform-s': {
      type: 'responsive',
      states: ['hover'],
      property: 'transform-style',
    },
    'transition': {
      type: 'standard',
      property: 'transition',
    },
    'transition-dly': {
      type: 'standard',
      property: 'transition-delay',
    },
    'transition-d': {
      type: 'standard',
      property: 'transition-duration',
    },
    'transition-p': {
      type: 'standard',
      property: 'transition-property',
    },
    'transition-tf': {
      type: 'standard',
      property: 'transition-timing-function',
    },
    'user-s': {
      type: 'standard',
      property: 'user-select',
    },
    'vertical-a': {
      type: 'standard',
      property: 'vertical-align',
    },
    'visibilty': {
      type: 'responsive',
      property: 'visibility',
    },
    'white-s': {
      type: 'standard',
      property: 'white-space',
    },
    'word-b': {
      type: 'standard',
      property: 'word-break',
    },
    'writing-m': {
      type: 'responsive',
      property: 'writing-mode',
    },
    'z': {
      type: 'standard',
      states: ['hover', 'focus'],
      property: 'z-index',
    },
    'fill': {
      type: 'standard',
      states: ['hover'],
      property: 'fill',
    },
    'list-s': {
      type: 'standard',
      property: 'list-style',
    },
  },
};
