import '../common/index.js'
import { Given, When, Then, After } from 'cypress-cucumber-preprocessor/steps'

After(() => {
    cy.window().then((win) => {
        win.onChange.reset()
        win.onFocus.reset()
        win.onBlur.reset()
    })
})

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
