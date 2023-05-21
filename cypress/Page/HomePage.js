
const PageEmelentLocators = require('../Page/PageElemetsLocators/HomePageElements.json')
export class HomePage {

          

          navigate() {
                    cy.visit('https://www.thegreatcourses.com/')
          }

          clickBrowseButton() {
                    cy.get(PageEmelentLocators.HomePageLocators.BrowseButtonVisibelLocator).should('be.visible')
                    cy.get(PageEmelentLocators.HomePageLocators.BrowseButtonLocator).trigger('mouseover').click();
          }

          clickMathematicsCategory() {
                    cy.get(':nth-child(7) > .CategoryButton-Link').click();
          }

          clickHistoryCategory() {
                    cy.get(PageEmelentLocators.HomePageLocators.HistoryCategoryLocator).click();
          }
}