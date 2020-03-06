import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains a link to the help page', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should(lis => {
        expect(lis.eq(2)).to.be.visible
    })
})
