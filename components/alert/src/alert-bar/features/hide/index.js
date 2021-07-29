import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar with a custom duration is rendered', () => {
    cy.visitStory('AlertBar', 'Custom duration')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Given('a permanent AlertBar with actions is rendered', () => {
    cy.visitStory('AlertBar', 'Permanent with actions')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Given('a permanent AlertBar with hidden and onHidden is rendered', () => {
    cy.visitStory('AlertBar', 'Hidden prop')
})

When('the custom duration has passed', () => {
    cy.wait(2000)
})

When('the default duration has passed', () => {
    cy.wait(8000)
})

When('the user clicks on the "Cancel" button', () => {
    cy.get(
        '[data-test="dhis2-uicore-alertbar-action"]:contains("Cancel")'
    ).click()
})

Then('the onHidden handler is not called', () => {
    cy.window().should(win => {
        expect(win.onHidden).to.not.be.called
    })
})

When('the user click a button which toggles the hidden prop', () => {
    cy.get('button').click()
})
