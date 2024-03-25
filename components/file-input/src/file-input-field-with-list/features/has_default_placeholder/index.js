import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a default FileInputFieldWithList is rendered', () => {
    cy.visitStory('FileInputFieldWithList', 'With default texts')
})

Then('the default placeholder is visible', () => {
    cy.contains('No file uploaded yet').should('be.visible')
})
