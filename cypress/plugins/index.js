/// <reference types="cypress" />
// ***********************************************************

// my usual preprocessor
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = (on, config) => {
  const esBuildOptions = {
    define: {
      'process.env.NODE_ENV': '"development"'
    },
  }
  on('file:preprocessor', createBundler(esBuildOptions));
  return config;
}
