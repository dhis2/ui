import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with initialFocus is rendered', () => {
    cy.visitStory('SplitButton', 'With initialFocus')
})

Then('the SplitButton button is focused', () => {
    cy.focused().should(
        'have.attr',
        'data-test',
        'dhis2-uicore-splitbutton-button'
    )
})
