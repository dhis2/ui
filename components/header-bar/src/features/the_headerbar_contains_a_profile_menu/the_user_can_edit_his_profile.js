import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains a link to edit the profile', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        expect(lis.eq(3)).to.be.visible
    })
})
