/// <reference types="cypress"/>

describe('AuthSigIn', () => {

  const baseUrl = 'http://localhost:3000/'

  it.skip('login', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('agmail.com');

    cy.get(':nth-child(2) >> input').type('123456');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@loginUser').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
      expect(response.body).has.property('token');
      expect(response.body.token).is.not.null;
    })
  });


  it('loginEmailInvalid', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('agmail.com');

    cy.get(':nth-child(2) >> input').type('123456');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@loginUser').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
    })
  });


  it.skip('loginPasswordInvalid', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('a@gmail.com');

    cy.get(':nth-child(2) >> input').type('12345');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@loginUser').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
    })
  });
});