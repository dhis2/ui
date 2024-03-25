import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('a required MultiSelect with no selected value', () => {
    cy.visitStory('Testing:MultiSelectFieldFF', 'Required')
    cy.getFormValue('multiSelect')
    cy.verifyFormValue('multiSelect', undefined)
})
