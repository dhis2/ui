import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a required RadioControl with no selected value', () => {
    cy.visitStory('Testing:RadioControl', 'Default')
    cy.verifyFormValue('choice', undefined)
})
