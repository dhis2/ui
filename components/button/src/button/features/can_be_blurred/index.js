import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an Button with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Button', 'With initial focus and on blur')
    cy.focused().should('exist')
})

When('the Button is blurred', () => {
    cy.get('[data-test="dhis2-uicore-button"]').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        expect(win.onBlur).to.be.calledWith({
            value: 'default',
            name: 'Button',
        })
    })
})
