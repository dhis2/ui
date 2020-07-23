import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Tag with text is rendered', () => {
    cy.visitStory('Tag', 'With text')
    cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
})

Then('the text will be visible', () => {
    cy.get('[data-test="dhis2-uicore-tag-text"]')
        .contains('Text content')
        .should('be.visible')
})
