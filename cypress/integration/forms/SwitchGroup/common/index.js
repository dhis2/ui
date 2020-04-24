import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a required SwitchGroup with no selected value', () => {
    cy.visitStory('Testing:SwitchGroup', 'Required')
    cy.verifyFormValue('choice', undefined)
})
