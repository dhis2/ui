import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a TextArea with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('TextArea', 'With initialFocus and onBlur')
})

When('the TextArea is blurred', () => {
    cy.get('[data-test="dhis2-uicore-textarea"] textarea').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: '',
            name: 'textarea',
        })
    })
})
