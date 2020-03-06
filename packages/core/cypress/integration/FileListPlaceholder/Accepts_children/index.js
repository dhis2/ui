import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileListPlaceholder with children is rendered', () => {
    cy.visitStory('FileListPlaceholder', 'With children')
    cy.get('[data-test="dhis2-uicore-filelistplaceholder"]').should(
        'be.visible'
    )
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
