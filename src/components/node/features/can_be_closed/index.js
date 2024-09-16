import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an open Node with an onClose handler is rendered', () => {
    cy.visitStory('Node', 'Open with on close')
})

When('the arrow is clicked', () => {
    cy.get('[data-test="dhis2-uicore-node-toggle"]').click()
})

Then('the onClose handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClose).to.be.calledWith({ open: false })
    })
})
