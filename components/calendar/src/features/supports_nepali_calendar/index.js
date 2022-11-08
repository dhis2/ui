import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Calendar with nepali calendar is rendered', () => {
    cy.visitStory('A Calendar', 'for the Nepali calendar')
    cy.get('[data-test=calendar]').should('be.visible')
})

Then('days should be rendered in Nepali', () => {
    cy.contains('आइत').should('be.visible')
    cy.contains('सोम').should('be.visible')
    cy.contains('मंगल').should('be.visible')
    cy.contains('बुध').should('be.visible')
    cy.contains('बिही').should('be.visible')
    cy.contains('शुक्र').should('be.visible')
    cy.contains('शनि').should('be.visible')
})
