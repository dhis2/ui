import '../common/index.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the HeaderBar should display the dhis2 logo', () => {
    cy.get('[data-test="headerbar-logo"]').should('be.visible')
})

Then('the logo should link to the homepage', () => {
    cy.get('@systemInfoFixture').then(({ contextPath }) => {
        cy.get('[data-test="headerbar-logo"] a').then($a => {
            expect($a.attr('href')).to.equal(contextPath)
        })
    })
})
