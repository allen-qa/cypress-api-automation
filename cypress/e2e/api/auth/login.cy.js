// login.cy.js

describe("Reqres Login API", () => {
    // Load fixture once before all tests
    beforeEach(() => {
      cy.fixture('testData').as('fixtureData');
    });
  
    it("Logs in successfully with valid credentials", function() {
      // Access fixture data through this.fixtureData
      const validLogin = this.fixtureData.auth.validLogin;
      const endpoints = this.fixtureData.endpoints;
      const statusCodes = this.fixtureData.statusCodes;
  
      cy.request({
        method: "POST",
        url: endpoints.baseUrl + endpoints.login,
        body: {
          email: validLogin.email,
          password: validLogin.password
        }
      }).then((response) => {
        expect(response.status).to.eq(statusCodes.success);
        expect(response.body).to.have.property("token");
      });
    });
  
    it("Fails with invalid password", function() {
      const invalidLogin = this.fixtureData.auth.invalidLogin;
      const endpoints = this.fixtureData.endpoints;
      const statusCodes = this.fixtureData.statusCodes;
  
      cy.request({
        method: "POST",
        url: endpoints.baseUrl + endpoints.login,
        body: {
          email: invalidLogin.email,
          password: invalidLogin.password
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(statusCodes.badRequest);
        expect(response.body.error).to.eq("user not found");
      });
    });
  });