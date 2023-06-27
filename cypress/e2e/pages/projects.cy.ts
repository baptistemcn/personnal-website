describe("project page", () => {
  it("should render", () => {
    cy.visit("/en/projects");
  });

  it("should render a title", () => {
    cy.visit("/en/projects");

    cy.get(".projects > h1").should("be.visible");
  });

  it("should render at least one project", () => {
    cy.visit("/en/projects");

    cy.get(".projects > div > article:first-child").should("be.visible");
  });
});
