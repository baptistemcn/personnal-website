describe("experiences component", () => {
  it("should render", () => {
    cy.visit("/en/about");
  });

  it("should render experience card", () => {
    cy.visit("/en/about");

    cy.get(".about-experience > div").should("be.visible");
  });

  it("should render a title in experience card", () => {
    cy.visit("/en/about");

    cy.get(".about-experience > div > div > div > h3").should("be.visible");
  });

  it("should render a date in experience card", () => {
    cy.visit("/en/about");

    cy.get(".about-experience > div > div > div > p").should("be.visible");
  });

  it("should render a presentation text in experience card", () => {
    cy.visit("/en/about");

    cy.get(".about-experience > div > div > p").should("be.visible");
  });

  it("should render at least one experience in experience card", () => {
    cy.visit("/en/about");

    cy.get(".about-experience > div > div > ul > li").should("be.visible");
  });
});
