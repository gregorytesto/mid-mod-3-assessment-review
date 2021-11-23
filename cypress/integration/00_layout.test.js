import productData from "../../src/data/productData";

describe("layout", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a section with products laid out in a grid", () => {
    cy.get(".products").should("have.css", "display", "grid");
    cy.get(".products").should("have.css", "grid-template-columns");

    productData.forEach((product) => {
      const { name } = product;
      cy.get(".products").should("contain.text", name);
    });
  });

  it("has a cart section with subtotal, tax, and total", () => {
    cy.get("body").should("contain.text", "Cart");
    cy.get("body").should("contain.text", "Subtotal");
    cy.get("body").should("contain.text", "Tax");
    cy.get("body").should("contain.text", "Total");
  });

  it("has a checkout section with expected form inputs", () => {
    cy.get("body").should("contain.text", "Checkout");
    cy.get("form label").should("contain.text", "First Name");
    cy.get("form label").should("contain.text", "Last Name");
    cy.get("form label").should("contain.text", "Email");
    cy.get("form label").should("contain.text", "Credit Card");
    cy.get("form label").should("contain.text", "Zip Code");
    cy.get("form button").should("contain.text", "Buy Now");
  });

  it("has a form with the id `#checkout`", () => {
    cy.get("form#checkout").should("exist");
  });
});
