// create-user.cy.js
describe("User Creation API", () => {
    // Load fixture data before tests
    before(function () {
        cy.fixture('testData').then((fixtureData) => {
            this.fixtureData = fixtureData;
        });
    });

    it("Creates a user with valid data", function () {
        // Access the loaded fixture data
        const userData = this.fixtureData.users.valid;
        const apiUrl = this.fixtureData.endpoints.baseUrl + this.fixtureData.endpoints.users;
        const expectedStatus = this.fixtureData.statusCodes.created;

        cy.request({
            method: "POST",
            url: apiUrl,
            body: userData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(expectedStatus);
            expect(response.body.name).to.eq(userData.name);
            expect(response.body.job).to.eq(userData.job);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
        });
    });
});