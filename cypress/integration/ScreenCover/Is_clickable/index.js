import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Screencover with onClick handler is rendered', () => {
    cy.visitStory('Screencover', 'With onClick')
})

When('the user clicks on the Screencover', () => {
    cy.get('[data-test="dhis2-uicore-screencover"]').click()
})

Then('the onClick handler will be called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
