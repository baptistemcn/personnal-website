describe("about page", () => {
  it("should render", () => {
    cy.visit("/about");
  });

  it("should render a title", () => {
    cy.visit("/en/about");

    cy.get(".about > h1").should("be.visible");
  });

  it("should render a presentation text", () => {
    cy.visit("/en/about");

    cy.get(".about-presentation > p").should("be.visible");
  });

  it("should render experiences title", () => {
    cy.visit("/en/about");

    cy.get("h2").should("be.visible");
  });

  it("should render at least one experience", () => {
    cy.visit("/en/about");

    cy.get(".about-experience > .experience").should("be.visible");
  });
});
