import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains a link to log out the user', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should(lis => {
        expect(lis.eq(4)).to.be.visible
    })
})
