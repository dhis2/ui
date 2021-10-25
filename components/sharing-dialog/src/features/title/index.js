import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { withDisplayname, withoutDisplayname } from '../fixtures/index.js'

Given('a sharing dialog without a displayname is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: withoutDisplayname,
    })
    cy.visitStory('sharing-dialog', 'visualization')
})

Given('a sharing dialog with a displayname is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: withDisplayname,
    })
    cy.visitStory('sharing-dialog', 'visualization')
})

Then('the default title should be visible', () => {
    cy.contains('Sharing and access').should('be.visible')
})

Then('the custom displayname should be included in the title', () => {
    cy.contains('Sharing and access: custom displayname').should('be.visible')
})
