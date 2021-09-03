import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a required MultiSelect with no selected value', () => {
    cy.visitStory('Testing:MultiSelectFieldFF', 'Required')
    cy.getFormValue('multiSelect')
    cy.verifyFormValue('multiSelect', undefined)
})
