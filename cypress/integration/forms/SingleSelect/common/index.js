import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a required SingleSelect with no selected value', () => {
    cy.visitStory('Testing:SingleSelectControl', 'Required')
    cy.verifyFormValue('singleSelect', undefined)
})
