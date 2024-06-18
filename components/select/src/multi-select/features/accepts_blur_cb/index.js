import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelect with onBlur handler is rendered', () => {
    cy.visitStory('MultiSelect', 'With on blur')
})

Then('the onBlur handler is called', () => {
    cy.window().should((win) => {
        expect(win.onBlur).to.be.calledOnce
        expect(win.onBlur).to.be.calledWith({
            selected: [],
        })
    })
})
