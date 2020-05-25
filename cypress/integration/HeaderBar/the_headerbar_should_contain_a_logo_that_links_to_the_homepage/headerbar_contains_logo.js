import '../common/index.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the HeaderBar should display the dhis2 logo', () => {
    cy.get('[data-test="headerbar-logo"]').should('be.visible')
})

Then('the logo should link to the homepage', () => {
    cy.getAll('@systemInfoFixture', '[data-test="headerbar-logo"] a').should(
        ([{ contextPath }, $a]) => {
            expect($a.attr('href')).to.equal(contextPath)
        }
    )
})
