import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with onBlur handler is rendered', () => {
    cy.visitStory('SingleSelect', 'With onBlur')
})

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        expect(win.onBlur).to.be.calledOnce
        expect(win.onBlur).to.be.calledWith({
            selected: '',
        })
    })
})
