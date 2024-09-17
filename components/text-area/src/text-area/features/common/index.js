import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('an empty TextArea is rendered', () => {
    cy.visitStory('TextArea', 'Empty')
})
