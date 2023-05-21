/// <reference types="Cypress" />

import{Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

import {HomePage} from '../../Page/HomePage.js'
import {CategoryPage} from'../../Page/CategoryPage.js'
import {CoursesPage} from'../../Page/CoursesPage.js'
import {PreCartPage} from'../../Page/PreCartPage.js'
import {CartPage} from'../../Page/CartPage.js'
import {CheckoutPage} from'../../Page/CheckoutPage.js'

const homePage = new HomePage();
const categoryPage = new CategoryPage();
const coursesPage = new CoursesPage();
const preCartPage = new PreCartPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();



          
                    Given( 'I visit The Great Courses Home Page',()=>{
                              cy.viewport(1920, 1080)
                              homePage.navigate();
                    })
          
                    When('I click on the Browse button',()=>{
                              homePage.clickBrowseButton();
                    })
          
                    And('I click on the History category',()=>{
                              homePage.clickHistoryCategory();
                    })
          
                    Then('I locate a book not on sale',()=>{
                              categoryPage.wait();
                              categoryPage.chooseBookNotOnSale();
                    })
          
                    
                    And('I click on the not on sale book',()=>{
                              categoryPage.wait();//?
                              // cy.waitUntil(() => cy.get("label[for='course-format-instant_video-DV30390").should('be.visible'), { timeout: 5000 });
                    })
          
                    And('I click on the Instant Video option',()=>{
                              coursesPage.clickTheInstantVideoOption();
                    })
          
                    And('I click on the Add to Cart button',()=>{
                              coursesPage.addToCartButton();
                    })
          
                    Then('I validate the text "Instant video added to your cart" appears on the page',()=>{
                              categoryPage.wait();
                              cartPage.validateCartMessage('Instant video added to your cart');
                    })
          
                    And('I click on the View Cart button',()=>{
                              preCartPage.clickViewCardButton();
                    })
          
                    Then('I validate the book is in the cart by its name',()=>{
                              cartPage.validateBookInCart('Early Humans: Ice, Stone, and Survival')
                    })
          
                    And('I click on the Checkout Now button',()=>{
                              cartPage.clickCheckOutNowButton();
                    })
          
                    When('I enter a fake email address and fake password',()=>{
                              checkoutPage.filledEmail('fake0000mail@gmail.com');
                              checkoutPage.filledPassword('fake0000mail');
                    })
          
                    And('I click on the Continue button',()=>{
                              checkoutPage.clickContinueButton();
                              cy.wait(3000);
                    })
          
                    Then('I validate the error message "We can not find an account with that email address" appears', () => {
                              checkoutPage.validateErrorMessage("We can't find an account with that email address");
                    });

                    Given("I navigate back to the previous page",()=>{
                              checkoutPage.backToPreviousPage();
                    })
          
                    When('I click on the Remove button to remove the book from the cart',()=>{
                              cartPage.removeButton();
                    }) 
          
                    And('I move the mouse to the Cart icon in the top right corner',()=>{
                              cartPage.moveToMouseCardIcon();
                    }) 
          
                    Then('I validate the text "Your Cart is Empty" appears right under the Cart icon',()=>{
                              cartPage.validateTheTextUnderTheCartIcon("Your Cart is Empty");
                    })
          