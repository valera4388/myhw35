describe('template spec', () => {

  it('passes', () => {
    cy.visit("/");
    cy.get('nav.page-nav > a').should('have.length', 7)
    cy.contains("Идёмвкино").should("be.visible")
  })
})