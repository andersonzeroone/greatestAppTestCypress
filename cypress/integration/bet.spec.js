/// <reference types="cypress"/>


describe('BetsFilter', () => {

  const baseUrl = 'http://localhost:3000/'

  it('betFiltered', () => {
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


});