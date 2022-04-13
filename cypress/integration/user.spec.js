/// <reference types="cypress"/>

describe('User', () => {

  const baseUrl = 'http://localhost:3000/';

  it.skip('createUser', () => {
    cy.visit(baseUrl);

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


  it.skip('emailAlreadyExists', () => {
    cy.visit(baseUrl);

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('testeCypress1');


    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('luby@admin.com.com');

    cy.get(':nth-child(3) > .sc-jcFjpl > input').type('123456');


    cy.intercept('POST', '**/user/create').as('createUser');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@createUser').then(({ response }) => {
      expect(response.statusCode).be.eq(400);
      expect(response.body).has.property('error');
      expect(response.body.error).is.not.null;
    })
  });


  it.skip('emailInvalid', () => {
    cy.visit(baseUrl);

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('testeCypress1');


    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('teste6s6gmail.com');

    cy.get(':nth-child(3) > .sc-jcFjpl > input').type('123456');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('passwordInvalid', () => {
    cy.visit(baseUrl);

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('testeCypress1');


    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('teste@gmail.com');

    cy.get(':nth-child(3) > .sc-jcFjpl > input').type('12345');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('emptyNameField', () => {
    cy.visit(baseUrl);

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('teste6s6@gmail.com');

    cy.get(':nth-child(3) > .sc-jcFjpl > input').type('123456');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('emptyEmailField', () => {
    cy.visit(baseUrl);

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('testeCypress1');

    cy.get(':nth-child(3) > .sc-jcFjpl > input').type('123456');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('emptyPasswordField', () => {
    cy.visit(baseUrl);

    cy.get('.fDRVEk').click()

    cy.get(':nth-child(1) > .sc-jcFjpl > input').type('testeCypress1');


    cy.get(':nth-child(2) > .sc-jcFjpl > input').type('teste6s6@gmail.com');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('logout', () => {
    cy.get('.sc-jgrJph > .sc-bdvvtL').click()
  });

});