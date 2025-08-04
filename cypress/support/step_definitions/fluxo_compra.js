import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("https://www.saucedemo.com/v1/index.html");
});

When("faço login como {string} com senha {string}", (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
  cy.get('#login-button').should('be.visible').click();
});

When("adiciono 3 produtos ao carrinho", () => {
  cy.get('.btn_inventory').eq(0).click(); // Backpack
  cy.get('.btn_inventory').eq(1).click(); // Bike Light
  cy.get('.btn_inventory').eq(2).click();
  cy.get('.shopping_cart_link').click();
});

When("finalizo o checkout com os dados {string}, {string}, {string}", (nome, sobrenome, cep) => {
  cy.contains('a.checkout_button', 'CHECKOUT').click();
  cy.get('[data-test="firstName"]').type(nome);
  cy.get('[data-test="lastName"]').type(sobrenome);
  cy.get('[data-test="postalCode"]').type(cep);
  cy.get('input[type="submit"][value="CONTINUE"]').click();
  cy.contains('a.cart_button', 'FINISH').click();
});

Then("devo ver a mensagem {string}", (mensagem) => {
  cy.get('.complete-header').should('contain', mensagem);
  cy.screenshot("Evidência_teste_concluído_com_sucesso!");
});