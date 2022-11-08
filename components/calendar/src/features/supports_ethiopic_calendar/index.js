import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an Ethiopic calendar is rendered', () => {
    cy.visitStory('A Calendar', 'for the Ethiopic calendar')
    cy.get('[data-test=calendar]').should('be.visible')
})

Then('days should be rendered in Amharic', () => {
    cy.contains('ሰኞ').should('be.visible')
    cy.contains('ማክሰ').should('be.visible')
    cy.contains('ረቡዕ').should('be.visible')
    cy.contains('ሐሙስ').should('be.visible')
    cy.contains('ዓርብ').should('be.visible')
    cy.contains('ቅዳሜ').should('be.visible')
    cy.contains('እሑድ').should('be.visible')
})
