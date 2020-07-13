#!/usr/bin/env node

const postcss = require('postcss');
const {red, green, white, yellow, bold} = require('chalk');
const fs = require('fs-extra');
const shell = require('shelljs');
const {argv} = require('yargs');
const filePlugin = require('@size-limit/file');
const {cosmiconfigSync} = require('cosmiconfig');
const prettyBytes = require('pretty-bytes');
const sizeLimit = require('size-limit');
const CleanCSS = require('clean-css');

const customProperties = require('./components/custom-properties.js');
const ruleset = require('./components/ruleset.js');

/**
 * Get the default configuration file.
 * This is used only if the config
 * is not provided by the user
 */
let config = require('./default/config.js');

/**
 * Main function command
 */
const init = () => {
  /**
   * Init the CSS string
   */
  let css = '';

  /**
   * Create a new CleanCSS instance used to
   * optimize the output
   */
  const cleanCSS = new CleanCSS();

  /**
   * Search for the user-defined configuration file.
   * If the config exist, use it as `config` insted of the default one
   */
  const userConfig = cosmiconfigSync('funky', {searchPlaces: ['funky.config.js']}).search();

  if (userConfig) {
    config = userConfig.config;
  }

  /**
   * Return the error message if `--out` or `outputPath` are
   * not defined by the user. If exists, save it to `outputPath`
   */
  if (!argv.out && !config.hasOwnProperty('outputPath')) {
    console.log(`\n\n`);
    console.log(red(bold(`Please determine a path.`)));
    console.log(white(`Use the '--out' option or set 'outputPath' in your config.`), `\n\n`);
    console.log(yellow('Exiting.'), `\n\n`);
    return;
  }

  const outputPath = config.outputPath || argv.out;

  /**
   * Ensure that the output file is a `.css` file,
   * if not throw the related error message.
   */
  if (!outputPath.endsWith('.css')) {
    console.log(`\n\n`);
    console.log(red(bold(`The output must be a .css file.`)));
    console.log(white(`Example: path/to/my/folder/tokens.css`, `\n\n`));
    console.log(yellow('Exiting.'), `\n\n`);
    return;
  }

  /**
   * Add custom-properties and standard ruleset (w/o media)
   * to the CSS string.
   */
  css += customProperties(config);
  css += ruleset(config, ['responsive', 'standard']);

  /**
   * If config.breakpoints are defined, loop them
   * and generate the selectors that are markes as `responsive`
   */
  Object.keys(config.breakpoints).forEach((key) => {
    css += `
      @media (width >= ${config.breakpoints[key]}) {
        ${ruleset(config, ['responsive'], `${key}-`)}
      }
    `.trim();
  });

  /**
   * Perform some CSS optimisation and clean
   */
  css = cleanCSS.minify(css).styles;

  /**
   * Proces the generated content with PostCSS
   * to transpile new CSS properties.
   */
  postcss([require('postcss-inset')()])
    .process(css, {from: undefined})
    .then((result) => {
      fs.ensureFileSync(outputPath);
      fs.writeFileSync(outputPath, result.css, () => true);
    });

  /**
   * Read the output file and get the file size.
   * Once done log the size and the confirmation message.
   */
  const getSize = sizeLimit([filePlugin], [outputPath]);

  getSize.then((result) => {
    const formattedSize = prettyBytes(result[0].size);

    console.clear();
    console.log(`\n\n`, bold(green(`✔`), bold` Utility CSS generated at '${outputPath}'`));
    console.log(`   `, `File size is ${bold(formattedSize)} minified and gzipped`, `\n\n`);
  });
};

/**
 * Run the main process
 */
init();
