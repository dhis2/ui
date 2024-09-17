import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Input with no text is rendered', () => {
    cy.visitStory('Testing:InputFieldFF', 'Default')
    cy.verifyFormValue('agree', undefined)
})

When('the user types something in the Input', () => {
    cy.get('input').type('something')
})

Then("the form state's value equals the written text", () => {
    cy.verifyFormValue('agree', 'something')
})
