import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the selector group item is closed', () => {
    cy.visitStory('SelectorGroupItem', 'closed no value')
})

Given('the selector group item is open', () => {
    cy.visitStory('SelectorGroupItem', 'open no value')
})

When('the user opens the selector group item', () => {
    cy.contains('Selection group item', { selector: 'button' }).click()
})

When('the user closes the selector group item', () => {
    cy.get('body').click('topLeft')
})

Then('the children should be displayed', () => {
    cy.get('[data-test="dhis2-uiwidgets-singleselectfield"]').should('exist')
})

Then('the children should not be displayed', () => {
    cy.get('[data-test="dhis2-uiwidgets-singleselectfield"]').should(
        'not.exist'
    )
})
