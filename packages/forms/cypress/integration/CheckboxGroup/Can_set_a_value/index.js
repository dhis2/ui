import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the CheckboxGroup has two options', () => {
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
    cy.get('legend + label').click()
})

When('the user selects the second option', () => {
    cy.get('legend + label + label').click()
})

Then("the form state's value equals the first option's value", () => {
    cy.get('@options').then(options => {
        const [firstOption] = options
        cy.getFormValue('choice').then(selected => {
            expect(selected).to.have.lengthOf(1)
            expect(selected).to.include.members([firstOption.value])
        })
    })
})

Then("the form state's value contains both options", () => {
    cy.get('@options').then(options => {
        const allOptions = options.map(({ value }) => value)
        cy.getFormValue('choice').then(selected => {
            expect(selected).to.have.lengthOf(allOptions.length)
            expect(selected).to.include.members(allOptions)
        })
    })
})
