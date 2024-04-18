import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains a link to the settings', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        expect(lis.eq(0)).to.be.visible
    })
})
