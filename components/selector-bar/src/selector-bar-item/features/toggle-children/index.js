import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the selector bar item is closed', () => {
    cy.visitStory('SelectorBarItem', 'closed no value')
})

Given('the selector bar item is open', () => {
    cy.visitStory('SelectorBarItem', 'open no value')
})

When('the user opens the selector bar item', () => {
    cy.contains('Selection bar item', { selector: 'button' }).click()
})

When('the user closes the selector bar item', () => {
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
