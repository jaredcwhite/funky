const ruleset = require('./ruleset.js');

/**
 *
 * @param {String} key The object key to check
 * @param {String} value The value that key should match
 */
const findByKey = (key, value) => (ogg) => {
  const firstLevelValues = Object.values(ogg);
  const hasKeyValue = firstLevelValues.find((innerObj) => innerObj[key] === value);
  return Boolean(hasKeyValue);
};

/**
 * If config.breakpoints are defined, loop them
 * and generate the selectors that are markes as `responsive`
 */
module.exports = (config) => {
  let mediaqueries = '';
  const generateMedia = findByKey('type', 'responsive')(config.utilities);
  // Check if there is at least one 'responsive' utility
  if (generateMedia) {
    Object.keys(config.breakpoints).forEach((key) => {
      mediaqueries += `
        @media (width >= ${config.breakpoints[key]}) {
          ${ruleset(config, ['responsive'], '', `-${key}`)}
        }
      `.trim();
    });
  }

  return mediaqueries;
};
