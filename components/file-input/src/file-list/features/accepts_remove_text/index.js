import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FileListItem with removeText is rendered', () => {
    cy.visitStory('FileListItem', 'With removeText')
})

Then('the removeText will be visible', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem-remove"]')
        .contains('Remove')
        .should('be.visible')
})
