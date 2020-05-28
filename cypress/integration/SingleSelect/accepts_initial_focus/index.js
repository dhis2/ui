import '../common'
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with initial focus is rendered', () => {
    cy.visitStory('SingleSelect', 'With initialFocus')
})
