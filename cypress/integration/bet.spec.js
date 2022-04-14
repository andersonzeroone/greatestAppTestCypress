/// <reference types="cypress"/>


describe('Bets', () => {

  it('betFiltered', () => {
    cy.login()

    cy.get('.e-dropdownbase').click();

    cy.get('[data-value="1"').click();

  });


  it('addBetsInCart', () => {
    cy.login()

    cy.get('.sc-gIDmLj > .sc-bdvvtL').click();

    cy.get('.sc-jWUzzU > :nth-child(1)').click();

    cy.get('.sc-lkgTHX').click();

    cy.get('.cNojwj').click();

    cy.get('.sc-lkgTHX').click();


    cy.get('.sc-jWUzzU > :nth-child(1)').click();
    cy.get('.sc-lkgTHX').click();

    cy.get('.sc-cxpSdN').click();

  });

  it('noAddBetsInCartValueMin', () => {
    cy.login()

    cy.get('.sc-gIDmLj > .sc-bdvvtL').click();

    cy.get('.sc-jWUzzU > :nth-child(1)').click();

    cy.get('.sc-lkgTHX').click();

    cy.get('.sc-cxpSdN > .sc-bdvvtL').click()


  });



});