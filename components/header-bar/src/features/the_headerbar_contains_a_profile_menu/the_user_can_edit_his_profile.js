require('../common/index.js')
import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains a link to edit the profile', () => {
    cy.get('[data-test="headerbar-profile-edit-profile-link"]').should(
        'be.visible'
    )
})
