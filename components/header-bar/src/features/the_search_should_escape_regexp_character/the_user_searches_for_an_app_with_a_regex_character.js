import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(/some app names contain a (.*)/, (character) => {
    // use fixture with special chars
    cy.fixture('HeaderBar/getModulesWithSpecialChars').as('modulesFixture')

    // set fixture as response of the modules action endpoint
    cy.get('@modulesFixture').then((fx) => {
        cy.route({
            url: 'https://domain.tld/dhis-web-commons/menu/getModules.action',
            response: fx,
        }).as('modules')
    })

    // verify that there's a module with the special char in its name
    cy.wrap(character).then((char) => {
        cy.get('@modulesFixture').then((fx) => {
            const modulesWithSpecialChar = fx.modules.filter((module) => {
                return module.displayName.indexOf(char) !== -1
            })

            expect(modulesWithSpecialChar).to.have.length.of.at.least(1)
        })
    })
})

Then(/only apps with (.*) in their name should be shown/, (character) => {
    cy.get('[data-test="headerbar-apps-menu-list"] > a > div').should(
        ($modules) => {
            $modules.each((index, module) => {
                const displayName = Cypress.$(module).text()
                expect(displayName.indexOf(character)).to.not.eql(-1)
            })
        }
    )
})
