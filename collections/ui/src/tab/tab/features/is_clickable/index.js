import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Tab with onClick handler is rendered', () => {
    cy.visitStory('Tab', 'With on click')
})

Given('a disabled Tab with onClick handler is rendered', () => {
    cy.visitStory('Tab', 'With on click and disabled')
})

When('the Tab is clicked', () => {
    cy.get('[data-test="dhis2-uicore-tab"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClick).to.be.calledWith({})
    })
})

Then('the onClick handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onClick).not.to.be.called
    })
})
