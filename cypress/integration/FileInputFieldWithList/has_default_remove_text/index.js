import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default FileInputFieldWithList is rendered', () => {
    cy.visitStory('FileInputFieldWithList', 'With file and default texts')
})

Then('the default remove text is visible', () => {
    cy.contains('Remove').should('be.visible')
})
