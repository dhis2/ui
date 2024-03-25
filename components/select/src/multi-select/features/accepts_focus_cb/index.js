require('../common/index.js')
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelect with onFocus handler is rendered', () => {
    cy.visitStory('MultiSelect', 'With onFocus')
})

Then('the onFocus handler is called', () => {
    cy.window().should((win) => {
        expect(win.onFocus).to.be.calledOnce
        expect(win.onFocus).to.be.calledWith({
            selected: [],
        })
    })
})
