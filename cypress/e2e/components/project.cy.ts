describe("project component", () => {
  it("should render", () => {
    cy.visit("/en/projects");
  });

  it("should render project card", () => {
    cy.visit("/en/projects");

    cy.get(".projects > div > article").should("be.visible");
  });

  it("should render a title in project card", () => {
    cy.visit("/en/projects");

    cy.get(".projects > div > article > h2").should("be.visible");
  });

  it("should render a presentation text in project card", () => {
    cy.visit("/en/projects");

    cy.get(".projects > div > article > p").should("be.visible");
  });

  it("should render at least one link in project card", () => {
    cy.visit("/en/projects");

    cy.get(".projects > div > article > div > a").should("be.visible");
  });
});
