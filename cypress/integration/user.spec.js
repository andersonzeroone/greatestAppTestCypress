/// <reference types="cypress"/>

describe('User', () => {

  it('createUser', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('testeCypress1');


    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('teste6s6@gmail.com');

    cy.get(':nth-child(3) > .sc-jcFjpl > input').type('123456');


    cy.intercept('POST', '**/user/create').as('createUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@createUser').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
      expect(response.body).has.property('token');
      expect(response.body.token).is.not.null;
    })
  });

  it('logout', () => {
    cy.get('.sc-jgrJph > .sc-bdvvtL').click()
  });

});