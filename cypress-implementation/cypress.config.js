const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  video: false,
  defaultCommandTimeout: 15000,
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },

  retries: {
    runMode: 0,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents,
    specPattern: ["**/*.feature","cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    chromeWebSecurity: false
  }
});
