/// <reference types="cypress"/>

describe('Auth', () => {

  it.skip('login', () => {
    cy.visit('http://localhost:3000/');

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('a@gmail.com');

    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('123456');


    cy.intercept('POST', '**/login').as('loginUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@loginUser').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
      expect(response.body).has.property('token');
      expect(response.body.token).is.not.null;
    })
  });

  it('resetpassword', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.sc-kHOZwM').click();

    // cy.get('input').type('test@gmail.com')
    cy.get('.sc-kDTinF > .sc-bdvvtL').click();
  });


});