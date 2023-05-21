export class PreCartPage
{
           validateCartMessage(message) {
                    cy.contains(message).should('be.visible');
                    cy.get('h2.UpsellPage-CartTitle').should('have.text', message);
                    // cy.get('h2.UpsellPage-CartTitle').should('include.text', message);
                  }
          
           clickViewCardButton(){
                    // cy.get("a[class='btn btn-btn btn-dark']").click();
                    // cy.get('.btn.btn-btn.btn-dark').click();
                    cy.get("a.btn.btn-btn.btn-dark").click();
          }    
}
                
