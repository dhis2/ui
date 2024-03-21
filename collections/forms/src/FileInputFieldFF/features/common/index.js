import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('a single-file FileInput is rendered', () => {
    cy.visitStory('Testing:FileInput', 'Standard form')
})

Given('the InputField does not contain any files', () => {
    cy.verifyFormValue('fileTxt', undefined)
})
