import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Radio with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Radio', 'With initialFocus and onBlur')
})

When('the Radio is blurred', () => {
    cy.get('[data-test="dhis2-uicore-radio"] input').blur()
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
