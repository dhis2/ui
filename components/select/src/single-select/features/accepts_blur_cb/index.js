import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with onBlur handler is rendered', () => {
    cy.visitStory('SingleSelect', 'With onBlur')
})

When('the user selects the first option', () => {
    cy.get('[data-test="first-option"]').click()
})

When('the user focuses the text input', () => {
    cy.get('.input').focus()
})

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        expect(win.onBlur).to.be.calledOnce
        expect(win.onBlur).to.be.calledWith({
            selected: '',
        })
    })
})
