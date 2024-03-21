import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a disabled Checkbox with onClick handler is rendered', () => {
    cy.visitStory('Checkbox', 'Disabled with onClick')
})

When('the Checkbox is clicked', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').click({ force: true })
})

Then('the onClick handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onClick).not.to.be.called
    })
})
