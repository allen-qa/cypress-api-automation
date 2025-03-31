describe("Reqres Login API", () => {
    it("Logs in successfully with valid credentials", () => {
        cy.request("POST", "/login", {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("token");
        });
    });

    it("Fails with invalid password", () => {
        cy.request({
            method: "POST",
            url: "/login",
            body: { email: "eve.holt@reqres.in", password: "wrong" },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error).to.eq("user not found");
        });
    });
});