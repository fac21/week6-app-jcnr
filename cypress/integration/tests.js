beforeEach(() => {
    cy.task("resetDb");
});

it("can run tests", () => {
    assert.equal(1, 1);
});

it("can load the home page", () => {
    cy.visit("http://localhost:3000/");
});