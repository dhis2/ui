import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a sharing dialog without a displayname is visible', () => {
    cy.visitStory('sharing-dialog', 'without a displayname')
})

Given('a sharing dialog with a displayname is visible', () => {
    cy.visitStory('sharing-dialog', 'with a displayname')
})

Then('the default title should be visible', () => {
    cy.contains('Sharing and access').should('be.visible')
})

Then('the custom displayname should be included in the title', () => {
    cy.contains('Sharing and access: custom displayname').should('be.visible')
})
