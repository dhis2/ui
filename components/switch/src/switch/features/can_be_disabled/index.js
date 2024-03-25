import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a disabled Switch is rendered', () => {
    cy.visitStory('Switch', 'With disabled')
})

When('the user clicks the Switch', () => {
    cy.get('[data-test="dhis2-uicore-switch"] input').click({ force: true })
})

Then('the Switch is not focused', () => {
    cy.focused().should('not.exist')
})
