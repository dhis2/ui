import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an Input with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Input', 'With initialFocus and onBlur')
})

When('the Input is blurred', () => {
    cy.get('[data-test="dhis2-uicore-input"] input').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        expect(win.onBlur).to.be.calledWith({
            value: '',
            name: 'Default',
        })
    })
})
