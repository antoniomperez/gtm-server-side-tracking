describe('Smoke Test', () => {
  it('makes sure Google is visited', () => {
    cy.visit('http://google.com');
  });
});
