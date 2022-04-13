/// <reference types="cypress"/>

describe('AuthSigIn', () => {

  const baseUrl = 'http://localhost:3000/'

  it.skip('login', () => {
    cy.visit(baseUrl);

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


  it.skip('emailNotFound', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('lubyTeste@admin.com');

    cy.get(':nth-child(2) >> input').type('123456');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@loginUser').then(({ response }) => {
      expect(response.statusCode).be.eq(401);
      expect(response.body).has.property('message');
      expect(response.body.message).is.not.null;
    })
  });


  it.skip('emailInvalid', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('agmail.com');

    cy.get(':nth-child(2) >> input').type('123456');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('passwordInvalid', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('a@gmail.com');

    cy.get(':nth-child(2) >> input').type('12345');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('emptyEmailField', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(2) >> input').type('123456');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('emptyPasswordField', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('a@gmail.com');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


});