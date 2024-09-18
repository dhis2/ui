import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('there are 0 unread interpretations', () => {
    cy.visitStory('HeaderBarTesting', 'Zero Unread Interpretations')
})

Then('the interpretations link does not contain a count', () => {
    cy.get('[data-test="headerbar-interpretations-count"]').should('not.exist')
})
