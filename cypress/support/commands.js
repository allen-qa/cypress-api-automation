// commands.js
Cypress.Commands.add("login", (email, password) => {
    cy.request("POST", "/login", { email, password });
});