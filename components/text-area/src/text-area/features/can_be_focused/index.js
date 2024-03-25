require('../common/index.js')
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a TextArea with onFocus handler is rendered', () => {
    cy.visitStory('TextArea', 'With onFocus')
})

When('the TextArea is focused', () => {
    cy.get('[data-test="dhis2-uicore-textarea"] textarea').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().should((win) => {
        expect(win.onFocus).to.be.calledWith({
            value: '',
            name: 'textarea',
        })
    })
})
