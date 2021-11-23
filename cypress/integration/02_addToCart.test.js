import productData from "../../src/data/productData";
import formatPrice from "../../src/helpers/formatPrice";

const BUTTON_TEXT = "Add To Cart";

const addItemToCart = () => {
  cy.get("body").contains(BUTTON_TEXT).first().click();
};

const addItemsToCart = () => {
  const selectors =
    ".products input[type='submit'], .products button[type='submit']";
  cy.get(selectors).each((button) => {
    console.log(button);
    cy.wrap(button).click();
  });
};

describe("add to cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("When I click on a product", () => {
    it("its name appears in the cart", () => {
      const { name } = productData[0];
      addItemToCart();

      cy.get("li").contains(name);
    });

    it("its formatted price appears in the cart", () => {
      const { price } = productData[0];
      addItemToCart();

      cy.get("li").contains(formatPrice(price));
    });

    it("the subtotal updates with the price of the item", () => {
      addItemToCart();

      cy.get("body").contains("Subtotal: $19.99").should("exist");
    });

    it("the tax is 5% of the subtotal", () => {
      addItemToCart();

      cy.get("body").contains("Tax: $1.00").should("exist");
    });

    it("the total is the subtotal plus tax", () => {
      addItemToCart();

      cy.get("body").contains("Total: $20.99").should("exist");
    });
  });

  describe("When I click on additional products", () => {
    it("they are added to the cart", () => {
      addItemsToCart();

      productData.forEach(({ name }) => {
        cy.get("li").contains(name).should("exist");
      });
    });

    it("the other items in the cart do not change", () => {
      const { name, price } = productData[0];
      addItemToCart();
      cy.get("li").contains(`${name}: ${formatPrice(price)}`);

      addItemsToCart();
      cy.get("li").contains(`${name}: ${formatPrice(price)}`);
    });

    it("the subtotal, tax, and total update as expected", () => {
      addItemToCart();
      cy.get("body").contains("Subtotal: $19.99").should("exist");
      cy.get("body").contains("Tax: $1.00").should("exist");
      cy.get("body").contains("Total: $20.99").should("exist");

      addItemsToCart();
      cy.get("body").contains("Subtotal: $173.02").should("exist");
      cy.get("body").contains("Tax: $8.65").should("exist");
      cy.get("body").contains("Total: $181.67").should("exist");
    });
  });
});
