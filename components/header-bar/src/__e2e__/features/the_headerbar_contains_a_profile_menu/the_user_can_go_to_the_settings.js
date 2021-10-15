import '../common/index.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains a link to the settings', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        expect(lis.eq(0)).to.be.visible
    })
})
