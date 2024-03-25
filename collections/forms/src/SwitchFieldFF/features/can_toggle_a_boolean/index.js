require('../common/index.js')
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an unchecked Switch without value is rendered', () => {
    cy.visitStory('Testing:SwitchFieldFF', 'Unchecked')
    cy.verifyFormValue('switch', undefined)
})

Then('the form value that corresponds to the switch will be true', () => {
    cy.verifyFormValue('switch', true)
})

Given('a checked Switch without value is rendered', () => {
    cy.visitStory('Testing:SwitchFieldFF', 'Checked')
    cy.verifyFormValue('switch', true)
})

Then('the form value that corresponds to the switch will be false', () => {
    cy.verifyFormValue('switch', false)
})
