import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the messages link contains an icon with a number greater than 0', () => {
    cy.get('[data-test="headerbar-messages-count"]').should(($count) => {
        expect(parseInt($count.text(), 10)).to.be.greaterThan(0)
    })
})
