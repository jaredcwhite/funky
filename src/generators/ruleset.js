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
module.exports = (config, targets, prefix = '', suffix = '') => {
  let rules = '';

  Object.keys(config.utilities).forEach((key) => {
    const utility = config.utilities[key];

    if (targets.includes(utility.type)) {
      rules += `
        [style*='--${prefix}${key}${suffix}:'] {
          ${utility.property}: var(--${prefix}${key}${suffix});
        }`.trim();

      if (utility.states) {
        utility.states.forEach((state) => {
          rules += `
            [style*='--${prefix}${key}-${state}${suffix}:'] {
              ${utility.property}: var(--${prefix}${key}-${state}${suffix});
            }`.trim();
        });
      }
    }
  });

  return rules;
};
