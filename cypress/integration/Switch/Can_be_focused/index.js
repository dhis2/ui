import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Switch with onFocus handler is rendered', () => {
    cy.visitStory('Switch', 'With onFocus')
})

When('the Switch is focused', () => {
    cy.get('[data-test="dhis2-uicore-switch"] input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
