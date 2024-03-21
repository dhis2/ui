import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import { modulesWithSpecialCharacters } from '../../__e2e__/stories/modulesWithSpecialCharacters.js'

Given(/some app names contain a (.*)/, (character) => {
    // Needs to be wrapped, otherwise for some reason the wrong char is in the scope
    cy.wrap(character).then((char) => {
        cy.visitStory('HeaderBarTesting', 'With Special App Name Characters')

        // verify that there's a module with the special char in its name
        const modulesWithSpecialChar = modulesWithSpecialCharacters.filter(
            (module) => {
                return module.displayName.indexOf(char) !== -1
            }
        )

        expect(modulesWithSpecialChar).to.have.length.of.at.least(1)
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
