require('../common/index.js')
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'a MultiSelect with options with a duplicate value and this value is selected',
    () => {
        cy.visitStory('MultiSelect', 'With duplicate selected option values')
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
    cy.get('input[name="option one"]').should('have.attr', 'checked')
    cy.get('input[name="option one a"]').should('have.attr', 'checked')
})
