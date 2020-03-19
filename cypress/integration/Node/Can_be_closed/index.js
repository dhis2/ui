import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an open Node with an onClose handler is rendered', () => {
    cy.visitStory('Node', 'Open with onClose')
})

When('the arrow is clicked', () => {
    cy.get('[data-test="dhis2-uicore-node-toggle"]').click()
})

Then('the onClose handler is called', () => {
    cy.window().then(win => {
        expect(win.onClose).to.be.calledWith({ open: false })
    })
})
