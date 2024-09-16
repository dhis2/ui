import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Checkbox with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Checkbox', 'With initial focus and on blur')
})

When('the Checkbox is blurred', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        expect(win.onBlur).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
