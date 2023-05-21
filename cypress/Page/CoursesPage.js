export class CoursesPage {


          clickTheInstantVideoOption() {
                    // cy.get("label[for='course-format-instant_video-DV30390']").click();
                    cy.get('.BuyOptions-OptionsContainer > :nth-child(1) > .custom-control')
                    .should('be.visible')
                    .click();

          }

          clickTheDVDOption() {
                    
                    cy.wait(5000)
                    cy.get('.BuyOptions-OptionsContainer > :nth-child(2) > .custom-control')
                    .should('be.visible')
                    .click();
                    // cy.get('.BuyOptions-Option.BuyOptions-Option_isChosen.BuyOptions-Option_isProductPage')
                    // cy.get('.BuyOptions-OptionsContainer > :nth-child(2) > .custom-control > .BuyOptions-Label').click();
          }

          addToCartButton() {
                    cy.get("button.btn-block.btn.btn-success.btn-lg").click();
          }



}



