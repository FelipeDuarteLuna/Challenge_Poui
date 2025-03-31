describe('Switch Component', () => {
  it('Testing the Switch component, checking its operation and disabling the field.', () => {
    cy.visit('http://localhost:4200');
    cy.wait(3000);

    // Clicar no Switch para ativá-lo
    cy.get('.switch-container .slider').click();
    cy.get('.switch-container input').should('be.checked');

    cy.wait(3000);

    // Clicar no Switch para desativá-lo
    cy.get('.switch-container .slider').click();
    cy.get('.switch-container input').should('not.be.checked');

    // Desativar o Switch usando o botão
    cy.get('button').contains('Desativar Switch').click();
    cy.get('.switch-container input').should('be.disabled');

    // Verificar se o Switch não pode ser clicado quando desativado
    cy.get('.switch-container .slider').click({ force: true });
    cy.get('.switch-container input').should('not.be.checked');
  });

});
