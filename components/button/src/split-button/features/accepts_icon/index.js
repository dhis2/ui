import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SplitButton with an icon is rendered', () => {
    cy.visitStory('SplitButton', 'With icon')
    cy.get('[data-test="dhis2-uicore-splitbutton"]').should('be.visible')
})

Then('the icon is visible on the left button only', () => {
    cy.get(
        '[data-test="dhis2-uicore-splitbutton-button"] :contains("Icon")'
    ).should('be.visible')

    cy.get(
        '[data-test="dhis2-uicore-splitbutton-toggle"] :contains("Icon")'
    ).should('not.exist')
})
