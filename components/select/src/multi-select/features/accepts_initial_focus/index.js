import '../common/index.js'
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with initial focus is rendered', () => {
    cy.visitStory('MultiSelect', 'With initialFocus')
})
