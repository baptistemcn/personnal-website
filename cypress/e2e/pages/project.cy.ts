describe("project page", () => {
  it("should render", () => {
    cy.visit("/en/projects");
  });

  it("should render a title", () => {
    cy.visit("/en/projects");

    cy.get("h1").should("be.visible");
  });
});
