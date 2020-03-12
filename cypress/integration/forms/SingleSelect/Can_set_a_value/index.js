import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the SingleSelect has one option', () => {
    const options = [{ value: 'Value', label: 'Label' }]

    cy.wrap(options).as('options')
    cy.window().then(win => {
        win.updateCypressProps({ options })
    })
})

When('the user selects the first option', () => {
    cy.get('form > div').selectSelectNthOption(1)
})

Then("the form state's value equals the first option's value", () => {
    cy.get('@options').then(options => {
        cy.getFormValue('singleSelect').then(actualValue => {
            expect(actualValue).to.deep.equal(options[0])
        })
    })
})
