import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox without value is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked')
    cy.verifyFormValue('checkbox', undefined)
})

Then('the form value that corresponds to the checkbox will be true', () => {
    cy.verifyFormValue('checkbox', true)
})

Given('a checked Checkbox without value is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Checked')
    cy.verifyFormValue('checkbox', true)
})

Then('the form value that corresponds to the checkbox will be false', () => {
    cy.verifyFormValue('checkbox', false)
})
