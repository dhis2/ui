import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a required RadioGroup with no selected value', () => {
    cy.visitStory('Testing:RadioGroup', 'Required')
    cy.verifyFormValue('choice', undefined)
})
