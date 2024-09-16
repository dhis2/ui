import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('a required SingleSelect with no selected value', () => {
    cy.visitStory('Testing:SingleSelectFieldFF', 'Required')
    cy.verifyFormValue('singleSelect', undefined)
})
