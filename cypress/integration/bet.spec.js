/// <reference types="cypress"/>


describe('Bets', () => {

  const baseUrl = 'http://localhost:3000/'

  it.skip('betFiltered', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('luby@admin.com');

    cy.get(':nth-child(2) >> input').type('secret');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.get('.e-dropdownbase').click();

    cy.get('[data-value="1"').click();

    cy.get('.e-dropdownbase').click();

    cy.get('[data-value="2"').click();

    cy.get('[data-value="1"] > .e-chips-close').click();

  });


  it.skip('addBetsInCart', () => {
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('luby@admin.com');

    cy.get(':nth-child(2) >> input').type('secret');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

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
    cy.visit(baseUrl);

    cy.get(':nth-child(1) >> input').type('luby@admin.com');

    cy.get(':nth-child(2) >> input').type('secret');

    cy.get('.sc-kDTinF > .sc-bdvvtL').click();

    cy.get('.sc-gIDmLj > .sc-bdvvtL').click();

    cy.get('.sc-jWUzzU > :nth-child(1)').click();

    cy.get('.sc-lkgTHX').click();

    cy.get('.sc-cxpSdN > .sc-bdvvtL').click()


  });



});