require('../common/index.js')
import { Then, Given } from '@badeball/cypress-cucumber-preprocessor'

Given('there are 0 unread messages', () => {
    cy.visitStory('HeaderBarTesting', 'Zero Unread Messages')
})

Then('the messages link does not contain a count', () => {
    cy.get('[data-test="headerbar-messages-count"]').should('not.exist')
})
