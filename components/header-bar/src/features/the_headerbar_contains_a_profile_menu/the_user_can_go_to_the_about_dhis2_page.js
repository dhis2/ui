import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains a link to the About DHIS2 page', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        expect(lis.eq(5)).to.be.visible
    })
})
