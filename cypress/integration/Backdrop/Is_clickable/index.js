import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Backdrop with onClick handler is rendered', () => {
    cy.visitStory('Backdrop', 'With onClick')
})

When('the user clicks on the Backdrop', () => {
    cy.get('[data-test="dhis2-uicore-backdrop"]').click()
})

Then('the onClick handler will be called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
