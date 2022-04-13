/// <reference types="cypress"/>

describe('AuthResetPassword', () => {

  const baseUrl = 'http://localhost:3000/'


  it('resetPassword', () => {
    cy.visit(baseUrl);

    cy.get('.sc-kHOZwM').click();


    cy.get('input').type('resetPassword@gmail.com');


    cy.intercept('POST', '**/reset').as('reset');


    cy.get('.sc-kDTinF > .sc-bdvvtL').click();


    cy.wait('@reset').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
      expect(response.body).has.property('token');
      expect(response.body.token).is.not.null;

      Cypress.env('token', response.body.token);

    });

    const newPassword = 'secret';

    cy.get('input').type(newPassword);

    const token = Cypress.env('token');


    cy.intercept('PUT', `**/reset/${token}`, {
      body: {
        password: newPassword
      }
    }).as('resetPasswordToken');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

  });


  it.skip('emailNotFound', () => {
    cy.visit(baseUrl);

    cy.get('.sc-kHOZwM').click();


    cy.get('input').type('aluby@admin.com');


    cy.intercept('POST', '**/reset').as('reset');


    cy.get('.sc-kDTinF > .sc-bdvvtL').click();


    cy.wait('@reset').then(({ response }) => {
      expect(response.statusCode).be.eq(404);
      expect(response.body).has.property('message');
      expect(response.body.message).is.not.null;

    });

  });


  it.skip('emailInvalid', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('testgmail.com');

    cy.get(':nth-child(2) >> input').type('123456');


    cy.intercept('POST', '**/reset').as('reset');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.wait('@reset').then(({ response }) => {
      expect(response.statusCode).be.eq(200);
    })
  });


  it.skip('passwordInvalid', () => {
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
