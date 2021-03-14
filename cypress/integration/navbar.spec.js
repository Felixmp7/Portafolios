/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Navbar', () => {
    describe('Mobile Navbar', () => {
        beforeEach(() => cy.viewport('iphone-6+'));
        it('Should load bottom Navbar', () => {
            cy.visit('/');
            cy.get('[data-cy=mobileNavbar]').should('be.visible');
        });

        it('Should load Bottom NavbarOptions', () => {
            cy.get('[data-cy=navItem-training]').should('be.visible');
            cy.get('[data-cy=navItem-experiences]').should('be.visible');
            cy.get('[data-cy=navItem-skills]').should('be.visible');
            cy.get('[data-cy=navItem-about]').should('be.visible');
            cy.get('[data-cy=navItem-contact]').should('be.visible');
        });

        it('Should view Training section on click in bottom navbar option', () => {
            cy.get('section#training').should('exist');
            cy.get('[data-cy=navItem-training]').should('be.visible').click({ force: true });
            cy.wait(800);
            cy.get('section#training').should('be.visible');
        });

        it('Should view Experience section on click in bottom navbar option', () => {
            cy.get('section#experiences').should('exist');
            cy.get('[data-cy=navItem-experiences]').should('be.visible').click({ force: true });
            cy.wait(800);
            cy.get('section#experiences').should('be.visible');
        });

        it('Should view Skills section on click in bottom navbar option', () => {
            cy.get('section#skills').should('exist');
            cy.get('[data-cy=navItem-skills]').should('be.visible').click({ force: true });
            cy.wait(800);
            cy.get('section#skills').should('be.visible');
        });

        it('Should view About section on click in bottom navbar option', () => {
            cy.get('section#about').should('exist');
            cy.get('[data-cy=navItem-about]').should('be.visible').click({ force: true });
            cy.wait(800);
            cy.get('section#about').should('be.visible');
        });

        it('Should view Contact section on click in bottom navbar option', () => {
            cy.get('section#contact').should('exist');
            cy.get('[data-cy=navItem-contact]').should('be.visible').click({ force: true });
            cy.wait(800);
            cy.get('section#contact').should('be.visible');
        });
    });

    describe('Desktop Navbar', () => {
        it('Should load top Navbar', () => {
            cy.viewport('macbook-15');
            cy.get('[data-cy=navbar]').should('be.visible');
        });

        it('Should load NavbarOptions', () => {
            cy.get('[data-cy=navItem-training]').should('be.visible');
            cy.get('[data-cy=navItem-experiences]').should('be.visible');
            cy.get('[data-cy=navItem-skills]').should('be.visible');
            cy.get('[data-cy=navItem-about]').should('be.visible');
            cy.get('[data-cy=navItem-contact]').should('be.visible');
        });

        it('Should view Training section on click in navbar option', () => {
            cy.get('section#training').should('exist');
            cy.get('[data-cy=navItem-training]').click();
            cy.wait(800);
            cy.get('section#training').should('be.visible');
        });

        it('Should view Experience section on click in navbar option', () => {
            cy.get('section#experiences').should('exist');
            cy.get('[data-cy=navItem-experiences]').click();
            cy.wait(800);
            cy.get('section#experiences').should('be.visible');
        });

        it('Should view Skills section on click in navbar option', () => {
            cy.get('section#skills').should('exist');
            cy.get('[data-cy=navItem-skills]').click();
            cy.wait(800);
            cy.get('section#skills').should('be.visible');
        });

        it('Should view About section on click in navbar option', () => {
            cy.get('section#about').should('exist');
            cy.get('[data-cy=navItem-about]').click();
            cy.wait(800);
            cy.get('section#about').should('be.visible');
        });

        it('Should view Contact section on click in navbar option', () => {
            cy.get('section#contact').should('exist');
            cy.get('[data-cy=navItem-contact]').click();
            cy.wait(800);
            cy.get('section#contact').should('be.visible');
        });
    });
});
