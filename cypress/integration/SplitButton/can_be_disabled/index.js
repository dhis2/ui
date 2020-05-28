import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a disabled SplitButton is rendered', () => {
    cy.visitStory('SplitButton', 'With disabled')
})

When('the user clicks the SplitButton Button', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-button"]').click({
        force: true,
    })
})

Then('the SplitButton Button is not focused', () => {
    cy.focused().should('not.exist')
})

When('the user clicks the SplitButton Toggle', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-toggle"]').click({
        force: true,
    })
})

Then('the SplitButton Toggle is not focused', () => {
    cy.focused().should('not.exist')
})
