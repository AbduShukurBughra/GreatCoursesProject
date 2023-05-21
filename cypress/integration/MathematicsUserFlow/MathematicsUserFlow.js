/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import { HomePage } from '../../Page/HomePage.js'
import { CategoryPage } from '../../Page/CategoryPage.js'
import { CoursesPage } from '../../Page/CoursesPage.js'
import { PreCartPage } from '../../Page/PreCartPage.js'
import { CartPage } from '../../Page/CartPage.js'
import { CheckoutPage } from '../../Page/CheckoutPage.js'

const homePage = new HomePage();
const categoryPage = new CategoryPage();
const coursesPage = new CoursesPage();
const preCartPage = new PreCartPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
let grandTotal;




Given('I visit The Great Courses Home Page', () => {
          cy.viewport(1920, 1080)
          homePage.navigate();
})

When('I click on the Browse button', () => {
          homePage.clickBrowseButton();
})

And('I click on the Mathematics category', () => {
          homePage.clickMathematicsCategory();
})

Then('I locate the books on sale', () => {
          categoryPage.checkOnSale();
})

And('I click on the first book on sale', () => {
          categoryPage.chooseFirstBookOnSale();
})

And('I click on the DVD option', () => {
          coursesPage.clickTheDVDOption();
})

Then('I intercept the request to the "https://store.thegreatcourses.com/graphql/mutation/saveCartItem" API', () => {
  cy.intercept('POST', 'https://store.thegreatcourses.com/graphql/mutation/saveCartItem', (req) => {
    req.reply((res) => {
      grandTotal = res.body.data.saveCartItem.cart.grand_total;
    });
  }).as('saveCartItem');
});


And('I click on the Add to Cart button', () => {
          cy.wait(3000)
          coursesPage.addToCartButton();
})

Then('I wait for the API intercept call and print the grand_total when the response is received', () => {
          cy.wait('@saveCartItem').then(() => {
            console.log('Grand Total:', grandTotal);
          });
        });
        
Then('I validate the text "DVD was added to your cart" appears on the page', () => {
          preCartPage.validateCartMessage("DVD was added to your cart");
})

And('I click on the View Cart button', () => {
          preCartPage.clickViewCardButton();
})

Then('I validate the book is in the cart by its name', () => {
          cartPage.validateBookInCart('Mathematical Brain Teasers and Logic Puzzles')
})

And('I click on the Checkout Now button', () => {
          cartPage.clickCheckOutNowButton();
})

When('I enter a fake email address and fake password', () => {
          checkoutPage.filledEmail('fake0000mail@gmail.com');
          checkoutPage.filledPassword('fake0000mail');
})

And('I click on the Continue button', () => {
          checkoutPage.clickContinueButton();
          cy.wait(3000);
})

Then('I validate the error message "We can not find an account with that email address" appears', () => {
          checkoutPage.validateErrorMessage("We can't find an account with that email address");
});

Given("I navigate back to the previous page", () => {
          checkoutPage.backToPreviousPage();
})

When('I click on the Remove button to remove the book from the cart', () => {
          cartPage.removeButton();
})

And('I move the mouse to the Cart icon in the top right corner', () => {
          cartPage.moveToMouseCardIcon();
})

Then('I validate the text "Your Cart is Empty" appears right under the Cart icon', () => {
          cartPage.validateTheTextUnderTheCartIcon("Your Cart is Empty");
})






