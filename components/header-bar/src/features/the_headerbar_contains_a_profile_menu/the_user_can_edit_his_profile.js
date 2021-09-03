import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains a link to edit the profile', () => {
    cy.get('[data-test="headerbar-profile-edit-profile-link"]').should(
        'be.visible'
    )
})
