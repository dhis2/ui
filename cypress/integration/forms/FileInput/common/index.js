import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a single-file FileInput is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
})

Given('the InputField does not contain any files', () => {
    cy.verifyFormValue('fileTxt', undefined)
})
