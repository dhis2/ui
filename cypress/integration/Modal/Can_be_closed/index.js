import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Modal with onClose handler is rendered', () => {
    cy.visitStory('Modal', 'With onClose')
})

When('the Screencover is clicked', () => {
    cy.get('[data-test="dhis2-uicore-screencover"]').click('topLeft')
})

Then('the onClose handler is called', () => {
    cy.window().then(win => {
        expect(win.onClose).to.be.calledWith({})
    })
})
