import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileListItem with label is rendered', () => {
    cy.visitStory('FileListItem', 'With label')
})

Then('the label will be visible', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem"]')
        .contains('Label')
        .should('be.visible')
})
