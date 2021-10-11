import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a sharing dialog is rendered', () => {
    cy.visitStory('sharing-dialog', 'default')
    cy.contains('Sharing and access').should('exist')
})
