# Module Three Mid-module Assessment

In this assessment, you will build an application where users can add products to their cart and "purchase" them through a form.

## Assessment Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm run cypress
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

Your goal is to build a working application where users can:

- Add items to the cart.
- Enter information into the checkout form.
- Complete the transaction.

![demo gif](./garage-sale-gif-demo.gif)

### User stories

1. I can see sections with products, shopping cart, and checkout form.
1. I can see each product's name, price, photo, description, and an `Add To Cart` button.
1. I can add products to my cart and see the subtotal, tax, and total update.
1. I can submit the checkout form, complete my purchase, and see a confirmation alert with the total cost.
1. If I do not complete the checkout form with valid data, I will see an alert that tells me my data is not valid.

### Acceptance criteria and tests

The acceptance criteria below are covered by unit tests. Notice that there are some important details about the exact text, classes, or HTML tags you'll need to use in order to pass the tests.

#### Layout

- I can see a section with products laid out in a grid.
  - Use the class name `.products` with css grid and `grid-template-columns`
- I can see a `Cart` section that has `Subtotal`, `Tax`, and `Total`
- I can see a `Checkout` section that has an ID of `#checkout` and has inputs _and labels_ for `First Name`, `Last Name`, `Email`, `Credit Card`, `Zip Code`, and a button that says `Buy Now`
  - Don't forget to create `<label>` elements for your inputs

#### Product

- Each product displays the name, photo, and description.
- Each product displays a price formatted in dollars and cents.
  - Text should be: `Price: $00.00`
- Each product has an `Add To Cart` button.
  - The button text should be: `Add To Cart`

#### Add to cart

- When I click on a product, its name appears in the cart.
- When I click on a product, its formatted price appears in the cart.
  - Use `<ul>` and `<li>` elements to list the items and prices in the cart (product and price on one `<li>`)
- When I click on a product, the subtotal updates with the sum of the prices of the items in the cart.
  - Text should be: `Subtotal: $00.00` (with the correct price)
- When I click on a product, the tax updates to be 5% of the subtotal and is formatted in dollars and cents.
  - Text should be: `Tax: $00.00` (with the correct price)
- When I click on a product, the total updates to be the sum of the subtotal and tax, and is formatted in dollars and cents.
  - Text should be: `Total: $00.00` (with the correct price)
- When I click on additional products, they are added to the cart.
- When I click on additional products, the other items in the cart do not change.
- When I click on additional products, the subtotal, tax, and total update as expected.

#### Checkout

- I can complete the inputs in the checkout form.
- When I complete the form with valid input and click `Buy Now`, an alert tells me the purchase was successful.
  - Alert text should include: `Purchase complete`
- When I complete the form with valid input and click `Buy Now`, an alert tells me the total amount I will be charged.
- When I complete the form but a piece of data is missing, an alert tells me that my input is not valid.
  - Alert text should include: `Input is not valid`
- When I complete the form but the credit card is not 16 digits long, an alert tells me `Credit card number is not valid`
- When I complete the form but the zip code is not 5 digits long, an alert tells me `Zip code is not valid`

## Help and tips

- Before you write any code, think about your component structure.
  - What components will you need to represent the parts of the app?
  - Which components will need to have state?
  - Which components will need to know about the state of **other components**?
  - Which components will need to get props (data or callbacks) from another component?
  - Which components will be rendered by other components?
  - Draw out your component structure. Check your drawing against the user stories. Will you be able to implement all of the stories with this structure?
- The products for the store are in the array in `data/productData.js`. You can import this and pass it to your components.
- There is a `formatPrice()` function you can import from `helpers/formatPrice` that will format prices in dollars and cents.
- You will need to check that a credit card number is 16 digits long. You can use any 16 digit string for this. In industry, the standard test credit card number is `4111111111111111`.
- If your tests are failing, read the acceptance criteria closely. Some tests expect you to use specific text, classes, or HTML elements.

## Academic Integrity

- Do this assessment **on your own**.
  - Do not pair program with other fellows.
  - Do not refer to work from other fellows.
  - Do not ask individuals outside the program for help.
- You can refer to any notes that you have.
- You can Google anything you want, but do not copy any code that you do not understand.
- Your instructors are here to help you with technical difficulties.
  - Make sure that the tests are running on your computer. If not, tell an instructor ASAP.
  - Make sure that you can fork and clone the repo and run the app. If not, tell an instructor ASAP.
