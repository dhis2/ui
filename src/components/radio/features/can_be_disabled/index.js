import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a disabled Radio is rendered', () => {
    cy.visitStory('Radio', 'With disabled')
})

When('the user clicks the Radio', () => {
    cy.get('[data-test="dhis2-uicore-radio"] input').click({ force: true })
})

Then('the Radio is not focused', () => {
    cy.focused().should('not.exist')
})
