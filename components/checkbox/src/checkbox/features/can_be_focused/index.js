import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Checkbox with onFocus handler is rendered', () => {
    cy.visitStory('Checkbox', 'With on focus')
})

When('the Checkbox is focused', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().should((win) => {
        expect(win.onFocus).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
