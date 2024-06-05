import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a TextArea with no text is rendered', () => {
    cy.visitStory('TextArea', 'Default')
    cy.verifyFormValue('comment', undefined)
})

When('the user types something in the TextArea', () => {
    cy.get('textarea').type('something')
})

Then("the form state's value equals the written text", () => {
    cy.verifyFormValue('comment', 'something')
})
