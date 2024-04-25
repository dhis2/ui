import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a clearable MultiSelectField with selected option is rendered', () => {
    cy.visitStory('MultiSelectField', 'With clearable and selected option')
})

When('the clear button is hovered', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-clear"]').trigger(
        'mouseover',
        'top'
    )
})

Then('the clear text is visible', () => {
    cy.contains('Clear').should('be.visible')
})
