import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Radio with onFocus handler is rendered', () => {
    cy.visitStory('Radio', 'With onFocus')
})

When('the Radio is focused', () => {
    cy.get('[data-test="dhis2-uicore-radio"] input').focus()
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
