// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:3000/');

  cy.get(':nth-child(1) >> input').type('luby@admin.com');

  cy.get(':nth-child(2) >> input').type('secret');


  cy.intercept('POST', '**/login').as('loginUser');

  cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  cy.wait('@loginUser').then(({ response }) => {
    expect(response.statusCode).be.eq(200);
    expect(response.body).has.property('token');
    expect(response.body.token).is.not.null;
  })
});