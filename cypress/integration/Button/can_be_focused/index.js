import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Button with onFocus handler is rendered', () => {
    cy.visitStory('Button', 'With onFocus')
})

When('the Button is focused', () => {
    cy.get('[data-test="dhis2-uicore-button"]').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: 'default',
            name: 'Button',
        })
    })
})
