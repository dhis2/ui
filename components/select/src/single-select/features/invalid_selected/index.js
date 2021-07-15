import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a SingleSelect whose selected value does not correspond to one of its options',
    () => {
        cy.visitStory('SingleSelect', 'With invalid selected option', {
            onBeforeLoad(win) {
                cy.stub(win.console, 'error').as('consoleError')
            },
        })
    }
)
Then('the SingleSelect is rendered as if no value is selected', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-placeholder"]')
        .contains('Placeholder text')
        .should('be.visible')
})
Then('an error is written to the console', () => {
    cy.get('@consoleError').should(
        'be.calledWith',
        'There is no option with the value: "1". Make sure that the value passed to the selected prop matches the value of an existing option.'
    )
})
