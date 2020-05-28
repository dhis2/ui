import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains a link to the About DHIS2 page', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should(lis => {
        expect(lis.eq(3)).to.be.visible
    })
})
