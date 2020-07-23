import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default FileInputField is rendered', () => {
    cy.visitStory('FileInputField', 'Default')
})

Then('the default button label is visible', () => {
    cy.contains('Upload a file').should('be.visible')
})
