import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the HeaderBar displays a profile icon', () => {
    cy.get(
        `
        [data-test="headerbar-profile-icon-text"],
        [data-test="headerbar-profile-icon-image"]
    `
    ).should('be.visible')
})
