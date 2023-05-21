
export class CartPage 
{
          removeButton() {
                    cy.get("button[id='RemoveItem'] span").click();
          }

          moveToMouseCardIcon() {
                    cy.get("button[aria-label='Minicart']")
                              .trigger('mouseover')
          }

          validateTheTextUnderTheCartIcon(message) {
                    cy.get("p[class='CartOverlay-Empty']")
                              .should('contain', message);
          }          
          //validate the book is in the cart by its name
          validateTheBookInTheCartByItsName(message) {
                    cy.get('.CartItem-Heading').should('contain',message );
          }

          clickCheckOutNowButton() {
                    cy.get('.Button.btn.btn-fill-success.btn-block').click();
          }

          validateBookInCart(bookName) {
                    cy.get('.CartItem-Heading.mb-1')
                      .should('contain', bookName)
                      .should('be.visible');
          }

          validateCartMessage(addCartMessage){
                    cy.get('h2.UpsellPage-CartTitle')
                      .should('contain', addCartMessage)
                      .should('be.visible');
          }


           
        


}
