import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a MultiSelect with selected values that do not have a corresponding option',
    () => {
        cy.visitStory('MultiSelect', 'With some invalid selected options', {
            onBeforeLoad(win) {
                cy.stub(win.console, 'error').as('consoleError')
            },
        })
    }
)
Then('the valid selected values are rendered', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').should(
        'contain',
        'option three'
    )
})
Then('some errors are written to the console', () => {
    cy.get('@consoleError').should(
        'be.calledWith',
        'There is no option with the value: "1". Make sure that all the values passed to the selected prop match the value of an existing option.'
    )
    cy.get('@consoleError').should(
        'be.calledWith',
        'There is no option with the value: "2". Make sure that all the values passed to the selected prop match the value of an existing option.'
    )
})
