import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a SingleSelect with options with a duplicate value and this value is selected',
    () => {
        cy.visitStory('SingleSelect', 'With duplicate selected option values')
    }
)
Then(
    'the first option with the selected value is displayed in the input',
    () => {
        cy.get('[data-test="dhis2-uicore-select-input"]').should(
            'contain',
            'option one'
        )
    }
)
Then('both options are highlighted in the dropdown', () => {
    cy.get('[data-test="dhis2-uicore-singleselectoption"]')
        .contains('option one')
        .should('have.class', 'active')

    cy.get('[data-test="dhis2-uicore-singleselectoption"]')
        .contains('option one a')
        .should('have.class', 'active')
})
