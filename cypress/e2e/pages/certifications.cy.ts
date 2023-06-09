describe("certifications page", () => {
  it("should render", () => {
    cy.visit("/en/certifications");
  });

  it("should render a title", () => {
    cy.visit("/en/certifications");

    cy.get(".certifications > h1").should("be.visible");
  });

  it("should render at least one certification", () => {
    cy.visit("/en/certifications");

    cy.get(".certifications > div > article:first-child").should("be.visible");
  });
});
