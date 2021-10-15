import { Then } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../common/index.js'

Then('the HeaderBar should display the dhis2 logo', () => {
    cy.get('[data-test="headerbar-logo"]').should('be.visible')
})

Then('the logo should link to the homepage', () => {
    cy.get('[data-test="headerbar-logo"] a').should(($a) => {
        expect($a.attr('href')).to.equal(baseUrl)
    })
})
