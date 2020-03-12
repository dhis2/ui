import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Switch without value is rendered', () => {
    cy.visitStory('Testing:Switch', 'Unchecked')
    cy.verifyFormValue('switch', undefined)
})

Then('the form value that corresponds to the switch will be true', () => {
    cy.verifyFormValue('switch', true)
})

Given('a checked Switch without value is rendered', () => {
    cy.visitStory('Testing:Switch', 'Checked')
    cy.verifyFormValue('switch', true)
})

Then('the form value that corresponds to the switch will be false', () => {
    cy.verifyFormValue('switch', false)
})
