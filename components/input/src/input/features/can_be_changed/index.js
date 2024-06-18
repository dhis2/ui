import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Input with onChange handler is rendered', () => {
    cy.visitStory('Input', 'With on change')
})

When('the Input is filled with a character', () => {
    cy.get('[data-test="dhis2-uicore-input"]').click().type('a')
})

Then('the onChange handler is called', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledWith({
            value: 'a',
            name: 'Default',
        })
    })
})
