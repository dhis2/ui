require('../common/index.js')
import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains a link to the help page', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        expect(lis.eq(2)).to.be.visible
    })
})
