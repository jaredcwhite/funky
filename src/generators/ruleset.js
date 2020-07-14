/**
 * Takes the config an optional array of targets and an
 * optional prefix which generates a CSS string of
 * utility classes
 *
 * @param {Object} config The Funky config object
 * @param {Array} targets
 * @param {String} prefix=''
 * @returns {String}
 */
module.exports = (config, targets, prefix = '') => {
  let rules = '';

  Object.keys(config.utilities).forEach((key) => {
    const utility = config.utilities[key];

    if (targets.includes(utility.type)) {
      rules += `
        [style*='--${prefix}${key}:'] {
          ${utility.property}: var(--${prefix}${key});
        }`.trim();
    }
  });

  return rules;
};
