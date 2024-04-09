describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("input[placeholder='Enter car name...']");
    cy.get("input[placeholder='Enter car name...']").type("bmw");
    cy.get("input[placeholder='Enter car name...']").should(
      "have.value",
      "bmw"
    );
    cy.get("button[data-test='createCarBtn']");
    cy.get("div[data-test='car']").should("have.length", 0);
    cy.get("button[data-test='createCarBtn']").click();
    cy.get("div[data-test='car']").should("have.length", 1);
    cy.get("input[placeholder='Enter car name...']").type("audi");
    cy.get("input[placeholder='Enter car name...']").should(
      "have.value",
      "audi"
    );
    cy.get("button[data-test='createCarBtn']").click();
    cy.get("input[placeholder='Enter car name...']").should("have.value", "");
    cy.get("div[data-test='car']").should("have.length", 2);
    cy.contains("Delete this car");
    cy.contains("Delete this car").click();
    cy.get("div[data-test='car']").should("have.length", 1);
    cy.contains("Remove all cars");
    cy.contains("Remove all cars").click();
    cy.get("div[data-test='car']").should("have.length", 0);
    cy.get("button[data-test='createCarBtn']").click();
    cy.get("div[data-test='car']").should("have.length", 0);
    cy.visit("/#score");
    cy.get("h1");
    cy.get("h1").should("have.text", "Score");
    cy.contains("Game");
    cy.contains("Game").click();
    cy.get("h1").should("have.text", "Game");
  });
});
