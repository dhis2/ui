import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the MultiSelect has two options', () => {
    const options = [
        { value: 'value1', label: 'Label 1' },
        { value: 'value2', label: 'Label 2' },
    ]

    cy.wrap(options).as('options')
    cy.window().then(win => {
        win.updateCypressProps({ options })
    })
})

When('the user selects the first option', () => {
    cy.get('form > div').selectSelectNthOption(1, true)
})

When('the user selects the second option', () => {
    cy.get('form > div').selectSelectNthOption(2, true)
})

Then("the form state's value equals the first option's value", () => {
    cy.get('@options').then(options => {
        const [firstOption] = options
        cy.getFormValue('multiSelect').then(selected => {
            expect(selected).to.have.lengthOf(1)
            expect(selected).to.deep.equal([firstOption])
        })
    })
})

Then("the form state's value contains both options", () => {
    cy.get('@options').then(options => {
        cy.getFormValue('multiSelect').then(selected => {
            expect(selected).to.have.lengthOf(options.length)
            expect(selected).to.deep.equal(options)
        })
    })
})
