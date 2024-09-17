import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a default FileInputField is rendered', () => {
    cy.visitStory('FileInputField', 'Default')
})

Then('the default button label is visible', () => {
    cy.contains('Upload a file').should('be.visible')
})
