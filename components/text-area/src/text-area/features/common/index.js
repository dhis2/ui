import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('an empty TextArea is rendered', () => {
    cy.visitStory('TextArea', 'Empty')
})
