/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Portafolio', () => {
    it('Should load all components', () => {
        cy.viewport('macbook-15');
        cy.visit('/');
        cy.get('[data-cy=navbar]').should('exist').should('be.visible');
        cy.get('section#principal-banner').should('exist').should('be.visible');
        cy.get('section#training').should('exist').should('be.visible');
        cy.get('[data-cy=next-tip]').should('exist').should('be.visible');
        cy.get('section#experiences').should('exist').should('be.visible');
        cy.get('[data-cy=javascript-tip]').should('exist').should('be.visible');
        cy.get('section#skills').should('exist').should('be.visible');
        cy.get('[data-cy=cypress-tip]').should('exist').should('be.visible');
        cy.get('section#about').should('exist').should('be.visible');
        cy.get('section#contact').should('exist').should('be.visible');
    });
});
