import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuSectionHeader supplied with a label is rendered', () => {
    cy.visitStory('MenuSectionHeader', 'With Label')
    cy.get('[data-test="dhis2-uicore-menusectionheader"]').should('be.visible')
})

Then('the label is visible', () => {
    cy.contains('label').should('be.visible')
})
