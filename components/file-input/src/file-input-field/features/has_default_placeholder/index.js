import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default FileInputField is rendered', () => {
    cy.visitStory('FileInputField', 'Default')
})

Then('the default placeholder is visible', () => {
    cy.contains('No file uploaded yet').should('be.visible')
})
