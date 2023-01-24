import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox with a value is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked with value')
    cy.verifyFormValue('checkbox', undefined)
})

Then('the form value that corresponds to the checkbox will be yes', () => {
    cy.verifyFormArrayValue('checkbox', 'yes')
})

Given('a checked Checkbox with a value is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Checked with value')
    cy.verifyFormArrayValue('checkbox', 'yes')
})

Then('the form value that corresponds to the checkbox will be correct', () => {
    cy.window().then((win) => {
        expect(win.formValues.checkbox).to.deep.equal([])
    })
})
