import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(/no app name contains a (.*)/, (character) => {
    cy.wrap(character).then((char) => {
        cy.get('@modulesFixture').then((fx) => {
            const modulesWithSpecialChar = fx.modules.filter((module) => {
                return module.displayName.indexOf(char) !== -1
            })

            expect(modulesWithSpecialChar).to.have.length(0)
        })
    })
})

Then('no results should be shown', () => {
    cy.get('[data-test="headerbar-apps-menu-list"] > a > div').should(
        'not.exist'
    )
})
