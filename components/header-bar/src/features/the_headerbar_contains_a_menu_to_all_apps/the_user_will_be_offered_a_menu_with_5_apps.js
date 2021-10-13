import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'
import { webCommons } from '../common/index.js'

Given('there are 5 apps available to the user', () => {
    cy.get('@modulesFixture').then((fx) => {
        cy.route({
            url: `${webCommons}menu/getModules.action`,
            response: {
                ...fx,
                modules: fx.modules.slice(0, 5),
            },
        }).as('modules')
    })
})

When('the user clicks on the menu icons', () => {
    cy.get('[data-test="headerbar-apps-icon"]').click()
})

Then('the menu opens', () => {
    cy.get('[data-test="headerbar-apps-menu"]').should('be.visible')
})

Then('contains 5 items with links', () => {
    cy.get('[data-test="headerbar-apps-menu-list"]')
        .find('a')
        .should('have.length', 5)
})
