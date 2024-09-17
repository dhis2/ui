import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Radio with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Radio', 'With initial focus and on blur')
})

When('the Radio is blurred', () => {
    cy.get('[data-test="dhis2-uicore-radio"] input').blur()
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
