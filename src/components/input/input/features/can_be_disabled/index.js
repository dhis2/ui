import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a disabled Input is rendered', () => {
    cy.visitStory('Input', 'With disabled')
})

When('the user clicks the input', () => {
    cy.get('[data-test="dhis2-uicore-input"] input').click({ force: true })
})

Then('the Input is not focused', () => {
    cy.focused().should('not.exist')
})
