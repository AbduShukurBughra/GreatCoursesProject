export class CategoryPage 
{
  wait()
  {
    cy.wait(3000)
  }
  checkOnSale()
  {
    cy.get("label[for='sales-onsale']").click();
  }

  notOnSale()
  {
    cy.get("label[for='sales-onsale']").should('not.be.checked');
  }

  chooseFirstBookOnSale()
  {
    cy.get(".CourseTile-Sale.sale-badge.badge.badge-danger").first().click();
  }

  chooseBookNotOnSale()
  {
    cy.get('.card-footer > .CourseTile-Price.CourseTile-Price_isSale_.float-left').first().click();
  }
}
