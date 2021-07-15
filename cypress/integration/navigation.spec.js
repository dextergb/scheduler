describe("Navigation", () => {
  /**---------Test 1: Should visit root---------**/

  it("Should visit root", () => {
    cy.visit("/");
  });

  /**---------Test 2: Should navigate to Tuesday---------**/

  it("Should navigate to Tuesday", () => {
    cy.visit("/");
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
