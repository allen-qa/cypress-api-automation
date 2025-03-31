// update-delete.cy.js
describe("User Update/Delete", () => {
    it("Updates a user with PUT", () => {
        const updatedUser = { name: "neo", job: "the one" };
        cy.request("PUT", "/users/2", updatedUser).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(updatedUser.name);
        });
    });

    it("Deletes a user", () => {
        cy.request("DELETE", "/users/2").then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});
