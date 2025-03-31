// get-users.cy.js
describe("GET Users", () => {
    it("Fetches user list with pagination", () => {
        cy.request("GET", "/users?page=2").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length(6);
            expect(response.body).to.have.property("total_pages");
        });
    });

    it("Fetches a single user", () => {
        cy.request("GET", "/users/2").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.email).to.contain("@reqres.in");
        });
    });
});
