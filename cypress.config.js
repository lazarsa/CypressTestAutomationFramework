const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://the-internet.herokuapp.com',

  },
  retries: {
    //Configurin retry attempts for 'cypress run'
    runMode: 2,
    //Configuring retry attempts for 'cypress open'
    openMode: 1
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-output.xml',
    toConsole: true
  }
});
