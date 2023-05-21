export class CheckoutPage 
{

          filledEmail(email) {
                    cy.get('#email').type(email);
          }

          filledPassword(password) {
                    cy.get('#password').type(password);
          }


          clickContinueButton() {
                    cy.get('.mt-4').click();
          }

          validateErrorMessage(errorMessage) {
                    cy.get("small#emailError").invoke('text').should('eq', errorMessage);                
          }

          backToPreviousPage() {
                    cy.go('back');
          }


}

