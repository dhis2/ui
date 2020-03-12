import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a required SingleSelect with no selected value', () => {
    cy.visitStory('Testing:SingleSelect', 'Required')
    cy.verifyFormValue('singleSelect', undefined)
})
