require('../common/index.js')
import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the HeaderBar contains a link to the messages', () => {
    cy.get('[data-test="headerbar-messages"]').should('be.visible')
})
