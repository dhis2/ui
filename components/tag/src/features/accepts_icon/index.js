import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a default Tag is rendered', () => {
    cy.visitStory('Tag', 'Without icon')
    cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
})

Given('a Tag with an icon is rendered', () => {
    cy.visitStory('Tag', 'With icon')
    cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
})

Then('the icon will not be rendered', () => {
    cy.get('[data-test="dhis2-uicore-tag-icon"]').should('not.exist')
})

Then('the icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-tag-icon"]')
        .contains('Icon')
        .should('be.visible')
})
