/**
 * Generates CSS Custom Properties for colors, fonts and size scale
 *
 * @param {Object} config
 * @returns {String}
 */
module.exports = (config) => {
  let properties = '';
  const tokenKeys = [{key: 'fonts', prefix: 'font'}];

  /**
   * If generateCustomProperties is false or undefined
   * custom properties are not generated.
   */
  if (!config.generateCustomProperties) {
    return properties;
  }

  /**
   * Loops each option and if that config exists, it generates custom properties
   */
  tokenKeys.forEach((tokenKey) => {
    if (config.hasOwnProperty(tokenKey.key)) {
      Object.keys(config[tokenKey.key]).forEach((key) => {
        properties += `--${tokenKey.prefix}-${key}: ${config[tokenKey.key][key]};`;
      });
    }
  });

  /**
   * Wrap generated custom properties inside
   * the :root {} selector to make them global.
   */
  if (properties.length) {
    properties = `:root {
      ${properties}
    }`;
  }

  return properties;
};
