import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('there are three options', () => {
    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ]

    cy.wrap(options).as('options')
    cy.window().then(win => {
        win.updateCypressProps({ options })
    })
})

When('the user selects the last option', () => {
    cy.get('label:last').click()
})

Then("the form state's value equals the last option's value", () => {
    cy.get('@options').then(options => {
        cy.verifyFormValue('choice', options[2].value)
    })
})
