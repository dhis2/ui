import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelect with initial focus is rendered', () => {
    cy.visitStory('MultiSelect', 'With initialFocus')
})
