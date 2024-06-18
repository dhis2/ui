import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a top-aligned Modal with onClose handler is rendered', () => {
    cy.visitStory('Modal', 'With on close')
})

When('the Screencover is clicked above the modal', () => {
    cy.get('[data-test="dhis2-uicore-layer"] > .backdrop').click('top')
})

Then('the onClose handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClose).to.be.calledWith({})
    })
})

Given('a bottom-aligned Modal with onClose handler is rendered', () => {
    cy.visitStory('Modal', 'Bottom-aligned, with on close')
})

When('the Screencover is clicked below the modal', () => {
    cy.get('[data-test="dhis2-uicore-layer"] > .backdrop').click('bottom')
})

Given('a Modal with onClose handler is rendered', () => {
    cy.visitStory('Modal', 'With on close')
})

When('the close button is clicked', () => {
    cy.get('[data-test="dhis2-modal-close-button"]').click()
})
