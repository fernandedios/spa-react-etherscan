describe('<App /> E2E', () => {
  it('renders navbar', () => {
    cy.visit('/');
    cy.get('nav').should('to.exist');
  });

  it('renders footer', () => {
    cy.visit('/');
    cy.get('footer').should('to.exist');
  });

  it('renders search form', () => {
    cy.visit('/');
    cy.get('form').should('to.exist');
  });

  it('renders search input field', () => {
    cy.visit('/');
    cy.get('#field_eth').should('to.exist');
  });
});
