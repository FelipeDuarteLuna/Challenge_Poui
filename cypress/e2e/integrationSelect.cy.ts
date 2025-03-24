// filepath: cypress/integration/select-component.spec.js
describe('Select Component', () => {
  it('Testing the Select component by selecting an option, applying error styling, and disabling the field.', () => {
    cy.visit('http://localhost:4200');
    cy.wait(3000);

    cy.get('[ng-reflect-label="Choose an option"] > .custom-select > .select-button').click();
    cy.get('.select-dropdown > :nth-child(3)').click();

    // Clicar no botão error, para aplicar o estilo de erro
    cy.get('.buttonError').click();
    cy.wait(3000);
    cy.get('.buttonError').click();

    cy.get('form.ng-untouched > .ng-untouched > .custom-select > .select-button').click();
    cy.get('.select-dropdown > :nth-child(5)').click();
    cy.wait(3000);

    // Clicar no botão para desativar o Select
    cy.get('#toggle-select').click();

    // Verificar se o Select está desabilitado
    cy.get('[ng-reflect-label="Choose an option"] > .custom-select > .select-button').should('have.css', 'cursor', 'not-allowed');
    cy.wait(3000);

    // Clicar no botão para Ativar o Select
    cy.get('#toggle-select').click();
    cy.get('[ng-reflect-label="Choose an option"] > .custom-select > .select-button').should('have.css', 'cursor', 'pointer');

  });

});
