describe("home page", () => {
  it("should render", () => {
    cy.visit("");
  });

  it("should render title", () => {
    cy.visit("");

    cy.get(".card-text > h1").should("be.visible");
  });

  it("should render presentation text", () => {
    cy.visit("");

    cy.get(".card-text > p").should("be.visible");
  });

  it("should render icons container", () => {
    cy.visit("");

    cy.get(".card-icons").should("be.visible");
  });

  it("should render icons with link", () => {
    cy.visit("");

    cy.get(".card-icons > a").should("be.visible");

    cy.get(".card-icons > a").should("have.length", 2);
  });

  it("should click on icon github and redirect to github", () => {
    cy.visit("");

    cy.get(".card-icons > a[href*='github']")
      .invoke("removeAttr", "target")
      .click();
  });

  it("should click on icon linkedin and redirect to linkedin", () => {
    cy.visit("");

    cy.get(".card-icons > a[href*='linkedin']")
      .invoke("removeAttr", "target")
      .click();
  });
});
