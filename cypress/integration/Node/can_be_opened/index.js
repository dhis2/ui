import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a closed Node with an onOpen handler is rendered', () => {
    cy.visitStory('Node', 'Closed with onOpen')
})

When('the arrow is clicked', () => {
    cy.get('[data-test="dhis2-uicore-node-toggle"]').click()
})

Then('the onOpen handler is called', () => {
    cy.window().then(win => {
        expect(win.onOpen).to.be.calledWith({ open: true })
    })
})
