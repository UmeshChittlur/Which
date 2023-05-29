const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on);
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
  e2e: {
    setupNodeEvents,
    env: {
      baseUrl: 'https://www.which.co.uk',
    },

    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: 'cypress/e2e/**/functionalities.feature',
    viewportHeight: 950,
    viewportWidth: 1350,
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,

  },
});
