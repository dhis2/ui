import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a default FileInputFieldWithList is rendered', () => {
    cy.visitStory('FileInputFieldWithList', 'With default texts')
})

Then('the default button label is visible', () => {
    cy.contains('Upload a file').should('be.visible')
})
