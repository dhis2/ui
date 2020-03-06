import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('there are 0 unread interpretations', () => {
    cy.fixture('HeaderBar/dashboard')
        .then(response => ({
            ...response,
            unreadInterpretations: 0,
        }))
        .as('dashboardFixture')
})

Then('the interpretations link does not contain a count', () => {
    cy.get('[data-test="headerbar-interpretations-count"]').should('not.exist')
})
