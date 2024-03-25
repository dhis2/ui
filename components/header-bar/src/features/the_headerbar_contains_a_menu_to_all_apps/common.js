require('../common/index.js')
import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the HeaderBar dos not display the app menu', () => {
    cy.get('[data-test="headerbar-apps-menu"]').should('not.exist')
})
