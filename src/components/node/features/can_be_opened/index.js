import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a closed Node with an onOpen handler is rendered', () => {
    cy.visitStory('Node', 'Closed with on open')
})

When('the arrow is clicked', () => {
    cy.get('[data-test="dhis2-uicore-node-toggle"]').click()
})

Then('the onOpen handler is called', () => {
    cy.window().should((win) => {
        expect(win.onOpen).to.be.calledWith({ open: true })
    })
})
