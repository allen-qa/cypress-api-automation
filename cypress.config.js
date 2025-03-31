const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://reqres.in/api", // Base URL for API endpoints
    specPattern: "cypress/e2e/api/**/*.cy.js", // Test file pattern
    supportFile: "cypress/support/e2e.js", // Support file
  },
});