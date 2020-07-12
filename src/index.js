#!/usr/bin/env node

const {cosmiconfigSync} = require('cosmiconfig');
const {red, green, white, yellow, bold} = require('chalk');
const CleanCSS = require('clean-css');
const fs = require('fs');
const shell = require('shelljs');
const {argv} = require('yargs');
const sizeLimit = require('size-limit');
const filePlugin = require('@size-limit/file');
const prettyBytes = require('pretty-bytes');

const customProperties = require('./components/custom-properties.js');
const generator = require('./components/generator.js');

let config = require('./default/config.js');

// The main organ grinder
const init = () => {
  let css = '';
  const cleanCSS = new CleanCSS();

  // Try to load the user’s config
  const userConfig = cosmiconfigSync('funky', {searchPlaces: ['funky.config.js']}).search();

  if (userConfig) {
    config = userConfig.config;
  }

  // Bail out if the path isn't defined
  if (!argv.out && !config.hasOwnProperty('outputPath')) {
    console.log(`\n\n`);
    console.log(red(bold(`Please determine a path.`)));
    console.log(white(`Use the '--out' option or set 'outputPath' in your config.`), `\n\n`);
    console.log(yellow('Exiting.'), `\n\n`);
    return;
  }

  const outputPath = config.outputPath || argv.out;

  // The path has to contain a filename so we need to bail if that's not the case
  if (!outputPath.endsWith('.css')) {
    console.log(`\n\n`);
    console.log(red(bold(`The output must be a .css file.`)));
    console.log(white(`Example: path/to/my/folder/tokens.css`, `\n\n`));
    console.log(yellow('Exiting.'), `\n\n`);
    return;
  }

  // Add the custom props and the media query-less clases
  css += customProperties(config);
  css += generator(config, ['responsive', 'standard']);

  // If there's some breakpoints, generate the classes that are responsive
  Object.keys(config.breakpoints).forEach((key) => {
    css += `
      @media (width >= ${config.breakpoints[key]}) {
        ${generator(config, ['responsive'], `${key}-`)}
      }
    `.trim();
  });

  // css = cleanCSS.minify(css).styles;

  // Create the directory if it doesn't already exist
  if (!fs.existsSync(outputPath)) {
    shell.exec(`mkdir -p ${outputPath.replace(/[^\/]*$/, '')}`);
  }

  shell.exec(`echo "${css}" > ${outputPath}`);

  const getSize = sizeLimit([filePlugin], [outputPath]);

  getSize.then((result) => {
    const formattedSize = prettyBytes(result[0].size);

    console.clear();
    console.log(`\n\n`, green(bold(`✔`)), ` Utility CSS generated at '${outputPath}'`);
    console.log(`   `, `File size is ${bold(formattedSize)} minified and gzipped`, `\n\n`);
  });
};

init();
