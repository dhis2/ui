import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Input with no text is rendered', () => {
    cy.visitStory('Testing:Input', 'Default')
    cy.verifyFormValue('agree', undefined)
})

When('the user types something in the Input', () => {
    cy.get('input').type('something')
})

Then("the form state's value equals the written text", () => {
    cy.verifyFormValue('agree', 'something')
})
