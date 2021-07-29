import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains a link to the user account', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should(lis => {
        expect(lis.eq(1)).to.be.visible
    })
})
