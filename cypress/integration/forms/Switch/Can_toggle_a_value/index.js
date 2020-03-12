import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Switch with a value is rendered', () => {
    cy.visitStory('Testing:Switch', 'Unchecked with value')
    cy.verifyFormValue('switch', undefined)
})

Then('the form value that corresponds to the switch will be yes', () => {
    cy.verifyFormValue('switch', 'yes')
})

Given('a checked Switch with a value is rendered', () => {
    cy.visitStory('Testing:Switch', 'Checked with value')
    cy.verifyFormValue('switch', 'yes')
})

Then('the form value that corresponds to the switch will be null', () => {
    cy.window().then(win => {
        expect(win.formValues.switch).to.equal(null)
    })
})
