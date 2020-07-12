#!/usr/bin/env node

const {cosmiconfig, cosmiconfigSync} = require('cosmiconfig');
const {red, blue, green, bold} = require('chalk');
const CleanCSS = require('clean-css');
const fs = require('fs');
const shell = require('shelljs');

const customProperties = require('./components/custom-properties.js');
const generator = require('./components/generator.js');

let config = require('./default/config.js');

// The main organ grinder
const init = () => {
  let css = '';
  const pathIndex = process.argv.indexOf('--out');
  const cleanCSS = new CleanCSS();

  // Try to load the user’s config
  const userConfig = cosmiconfigSync('funky', {searchPlaces: ['funky.config.js']}).search();

  if (userConfig) {
    config = userConfig.config;
  }

  // Bail out if the path isn't defined
  if (pathIndex <= 0 && !config.hasOwnProperty('outputPath')) {
    console.log(
      red(
        `Please determine a path. You can do this by passing the path with a '--out' option or setting 'outputPath' in your config.`
      )
    );
    console.log(blue('Exiting.'));
    return;
  }

  const outputPath = config.outputPath || process.argv.slice(pathIndex + 1)[0];

  // The path has to contain a filename so we need to bail if that's not the case
  if (outputPath.indexOf('.css') < 0) {
    console.log(red(`Please add a css file to your path.`));
    console.log(red(`Example: path/to/my/folder/tokens.css`));
    console.log(blue('Exiting.'));
    return;
  }

  // Add the custom props and the media query-less clases
  css += customProperties(config);
  css += generator(config, ['responsive', 'standard']);

  // If there's some breakpoints, generate the classes that are responsive
  Object.keys(config.breakpoints).forEach(key => {
    css += `
      @media (width >= ${config.breakpoints[key]}) {
        ${generator(config, ['responsive'], `${key}\\:`)}
      }
    `.trim();
  });

  css = cleanCSS.minify(css).styles;

  // Create the directory if it doesn't already exist
  if (!fs.existsSync(outputPath)) {
    shell.exec(`mkdir -p ${outputPath.replace(/[^\/]*$/, '')}`);
  }

  shell.exec(`echo "${css}" > ${outputPath}`);

  console.clear()
  console.log(`\n\n`, green(bold('✔  Token utility classes generated!'), `\n\n`));
};

init();
