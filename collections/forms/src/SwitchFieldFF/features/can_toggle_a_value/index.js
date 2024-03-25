require('../common/index.js')
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an unchecked Switch with a value is rendered', () => {
    cy.visitStory('Testing:SwitchFieldFF', 'Unchecked with value')
    cy.verifyFormValue('switch', undefined)
})

Then('the form value that corresponds to the switch will be yes', () => {
    cy.verifyFormArrayValue('switch', 'yes')
})

Given('a checked Switch with a value is rendered', () => {
    cy.visitStory('Testing:SwitchFieldFF', 'Checked with value')
    cy.verifyFormArrayValue('switch', 'yes')
})

Then('the form value that corresponds to the switch will be correct', () => {
    cy.window().then((win) => {
        expect(win.formValues.switch).to.deep.equal([])
    })
})
