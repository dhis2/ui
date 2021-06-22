import '../common'
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with initial focus is rendered', () => {
    cy.visitStory('MultiSelect', 'With initialFocus')
})
