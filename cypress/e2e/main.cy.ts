describe("opening the app", () => {
  it("visit the token enter page", () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.contains("Token");
    cy.get("input").type(Cypress.env('TOKEN'));
    cy.get("input").should(
      "have.value",
        Cypress.env('TOKEN')
    ).then(()=>{
      cy.contains("Save").click();
    });
  });
});
