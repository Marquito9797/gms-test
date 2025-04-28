/// <reference types="cypress" />

describe('Testes', () => {
  let email; 

  beforeEach(() => {
    cy.visit('/');
    email = `marcos${Date.now()}@teste.com`; 
  });
afterEach(() => {
  cy.screenshot()
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.PreencherCadastro('Marcos', 'Vinicius', email, '11954993368', 'Marcos@123');
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso');
  });

  it('Valida mensagem de erro com campo nome incorreto', () => {
    cy.PreencherCadastro('Marcos20', 'Vinicius', email, '11954993368', 'Marcos@123');
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços'); 
  });
});

it('Valida mensagem de erro com campo telefone inválido', () => {
  cy.PreencherCadastro('Marcos', 'Vinicius', email, '1195499336800', 'Marcos@123');
  cy.get('#signup-response').should('contain', 'Telefone inválido'); 
});
