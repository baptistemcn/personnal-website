describe("footer", () => {
  it("should render", () => {
    cy.visit("");
  });

  it("should render footer in page", () => {
    cy.visit("");

    cy.get("footer").should("be.visible");
  });

  it("should render footer with a list", () => {
    cy.visit("");

    cy.get("footer > ul").should("be.visible");
  });

  it("should render a text inside the footer", () => {
    cy.visit("");

    cy.get("footer > ul > li").should("be.visible");
  });
});
