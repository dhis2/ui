import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
require('../common/index.js')

Given('a permanent AlertBar with hidden and onHidden is rendered', () => {
    cy.visitStory('AlertBar', 'Hidden prop')
})

Given('an AlertBar with a custom duration is rendered', () => {
    cy.visitStory('AlertBar', 'Custom duration')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Given('a permanent AlertBar with actions is rendered', () => {
    cy.visitStory('AlertBar', 'Permanent with actions')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the user clicks on the "Cancel" button', () => {
    cy.get(
        '[data-test="dhis2-uicore-alertbar-action"]:contains("Cancel")'
    ).click()
})

When('the user click a button which toggles the hidden prop', () => {
    cy.get('button').click()
})

When('the custom duration has passed', () => {
    cy.wait(2000)
})

Then('the onHidden handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onHidden).to.not.be.called
    })
})
