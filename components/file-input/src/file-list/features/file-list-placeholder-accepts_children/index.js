import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FileListPlaceholder with children is rendered', () => {
    cy.visitStory('FileListPlaceholder', 'With children')
    cy.get('[data-test="dhis2-uicore-filelistplaceholder"]').should(
        'be.visible'
    )
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
