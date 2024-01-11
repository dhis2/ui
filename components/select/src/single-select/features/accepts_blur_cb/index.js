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

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        const onBlur = win.onBlur
        expect(onBlur).to.be.calledOnce
        expect(onBlur.firstCall.args[0]).to.eql({ selected: '' })
    })
})
