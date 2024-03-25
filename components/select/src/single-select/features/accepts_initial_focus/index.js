require('../common/index.js')
import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('a SingleSelect with initial focus is rendered', () => {
    cy.visitStory('SingleSelect', 'With initialFocus')
})
