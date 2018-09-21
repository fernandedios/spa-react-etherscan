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

  it('renders search button', () => {
    cy.visit('/');
    cy.get('button').should('to.exist');
  });

  it('renders search parameter select elements', () => {
    cy.visit('/');
    cy.get('select[name="offset"]').should('to.exist');
    cy.get('select[name="sort"]').should('to.exist');
  });
});
