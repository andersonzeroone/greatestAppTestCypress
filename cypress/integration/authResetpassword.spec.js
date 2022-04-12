/// <reference types="cypress"/>

describe('Auth', () => {

  const baseUrl = 'http://localhost:3000/'

  it.skip('resetPassword', () => {
    cy.visit(baseUrl);

    cy.get('.sc-kHOZwM').click();


    cy.get('input').type('luby@admin.com');


    cy.intercept('POST', '**/reset').as('reset');


    cy.get('.sc-kDTinF > .sc-bdvvtL').click();


    cy.wait('@reset').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
      expect(response.body).has.property('token');
      expect(response.body.token).is.not.null;

      Cypress.env('tokenResetPassword', response.body.token);

    });

    const newPassword = '123456';

    cy.get('input').type(newPassword);



    const token = Cypress.env('token');


    cy.intercept('POST', `**/reset/${token}`, {
      body: {
        password: newPassword
      }
    }).as('resetPasswordRouteToken');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click()


  });


  it.skip('resetPasswordEmailInvalid', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('testgmail.com');

    cy.get(':nth-child(2) >> input').type('123456');


    cy.intercept('POST', '**/reset').as('reset');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@reset').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
    })
  });


  it('resetPasswordInvalid', () => {
    cy.visit(baseUrl);

    cy.get('.sc-kHOZwM').click();


    cy.get('input').type('luby@admin.com');


    cy.intercept('POST', '**/reset').as('reset');


    cy.get('.sc-kDTinF > .sc-bdvvtL').click();


    cy.wait('@reset').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
      expect(response.body).has.property('token');
      expect(response.body.token).is.not.null;

      Cypress.env('tokenResetPassword', response.body.token);

    });

    const newPassword = '12345';

    cy.get('input').type(newPassword);

    cy.get('.sc-kDTinF > .sc-bdvvtL').click()


  });


});
