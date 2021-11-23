import productData from "../../src/data/productData";
import formatPrice from "../../src/helpers/formatPrice";

describe("product", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays the name, photo, and description", () => {
    productData.forEach((product) => {
      const { name, description, img } = product;
      cy.get(".products")
        .should("contain.text", name)
        .should("contain.text", description);
      cy.get(`.products img[src="${img}"]`).should("exist");
    });
  });

  it("displays a price formatted in dollars and cents", () => {
    productData.forEach((product) => {
      const { price } = product;
      cy.get(".products").should(
        "contain.text",
        `Price: ${formatPrice(price)}`
      );
    });
  });

  it("has an Add To Cart button", () => {
    cy.get(".products button, .products input[type='submit']")
      .should("contain.text", "Add To Cart")
      .should("have.length", productData.length);
  });
});
