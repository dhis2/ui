import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Label with required is rendered', () => {
    cy.visitStory('Label', 'With required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-label-required"]').should('be.visible')
})
