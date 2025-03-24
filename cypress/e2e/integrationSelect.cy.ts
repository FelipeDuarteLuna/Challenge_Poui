describe('Select Component', () => {
  it('Testing the Select component by selecting an option, applying error styling, and disabling the field.', () => {
    cy.visit('http://localhost:4200');

    // Garantir que o select está visível antes de interagir
    cy.get('[ng-reflect-label="Choose an option"] > .custom-select > .select-button')
      .should('be.visible')
      .click();

    cy.get('.select-dropdown > :nth-child(3)').should('be.visible').click();

    // Aplicar erro e garantir visibilidade antes de interagir
    cy.get('.buttonError').should('be.visible').click();
    cy.get('.buttonError').click();

    // Selecionar outra opção
    cy.get('form.ng-untouched > .ng-untouched > .custom-select > .select-button')
      .should('be.visible')
      .click();
    cy.get('.select-dropdown > :nth-child(5)').should('be.visible').click();

    // Desativar Select
    cy.get('#toggle-select').should('be.visible').click();

    // Verificar se o Select está desativado
    cy.get('[ng-reflect-label="Choose an option"] > .custom-select > .select-button')
      .should('have.css', 'cursor', 'not-allowed');

    // Reativar o Select
    cy.get('#toggle-select').should('be.visible').click();
    cy.get('[ng-reflect-label="Choose an option"] > .custom-select > .select-button')
      .should('have.css', 'cursor', 'pointer');
  });
});
