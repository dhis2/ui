import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a disabled TextArea is rendered', () => {
    cy.visitStory('TextArea', 'With disabled')
})

When('the user clicks the TextArea', () => {
    cy.get('[data-test="dhis2-uicore-textarea"] textarea').click({
        force: true,
    })
})

Then('the TextArea is not focused', () => {
    cy.focused().should('not.exist')
})
