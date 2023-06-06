describe("header", () => {
  it("should render", () => {
    cy.visit("");
  });

  it("should render navigation in header", () => {
    cy.visit("");

    cy.get("header > nav").should("be.visible");
  });

  it("should render links in header", () => {
    cy.visit("");

    cy.get("header > nav > ul > li").should("have.length", 4);
  });

  it("should render home link and click it", () => {
    cy.visit("");

    cy.get("header > nav > ul > li:first-child").should(
      "not.have.class",
      "active",
    );
    cy.get("header > nav > ul > li:first-child").click();
    cy.get("header > nav > ul > li:first-child").should("have.class", "active");
  });

  it("should render about link and click it", () => {
    cy.visit("");

    cy.get("header > nav > ul > li:nth-child(2)").should(
      "not.have.class",
      "active",
    );
    cy.get("header > nav > ul > li:nth-child(2)").click();
    cy.get("header > nav > ul > li:nth-child(2)").should(
      "have.class",
      "active",
    );
  });

  it("should render certifications link and click it", () => {
    cy.visit("");

    cy.get("header > nav > ul > li:nth-child(3)").should(
      "not.have.class",
      "active",
    );
    cy.get("header > nav > ul > li:nth-child(3)").click();
    cy.get("header > nav > ul > li:nth-child(3)").should(
      "have.class",
      "active",
    );
  });

  it("should render projects link and click it", () => {
    cy.visit("");

    cy.get("header > nav > ul > li:nth-child(4)").should(
      "not.have.class",
      "active",
    );
    cy.get("header > nav > ul > li:nth-child(4)").click();
    cy.get("header > nav > ul > li:nth-child(4)").should(
      "have.class",
      "active",
    );
  });
});
