import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Checkbox', 'With initialFocus and onBlur')
})

When('the Checkbox is blurred', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
