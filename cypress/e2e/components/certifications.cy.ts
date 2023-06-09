describe("certifications component", () => {
  it("should render", () => {
    cy.visit("/en/certifications");
  });

  it("should render certification card", () => {
    cy.visit("/en/certifications");

    cy.get(".certifications > div > article").should("be.visible");
  });

  it("should render a title in certification card", () => {
    cy.visit("/en/certifications");

    cy.get(".certifications > div > article > h2").should("be.visible");
  });

  it("should render a link in certification card", () => {
    cy.visit("/en/certifications");

    cy.get(".certifications > div > article > a").should("be.visible");
  });

  it("should redirect to certification website when click on link", () => {
    cy.visit("/en/certifications");

    cy.get(".certifications > div > article > a[href*='classic-react']")
      .invoke("removeAttr", "target")
      .click();
  });
});
