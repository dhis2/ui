import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default Tag is rendered', () => {
    cy.visitStory('Tag', 'Without icon')
    cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
})

Given('a Tag with an icon is rendered', () => {
    cy.visitStory('Tag', 'With icon')
    cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
})

Then('the icon will not be visible', () => {
    cy.get('[data-test="dhis2-uicore-tag-icon"]').should('not.be.visible')
})

Then('the icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-tag-icon"]')
        .contains('Icon')
        .should('be.visible')
})
