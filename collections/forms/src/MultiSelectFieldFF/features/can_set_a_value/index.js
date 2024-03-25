require('../common/index.js')
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the MultiSelect has two options', () => {
    const options = [
        { value: 'value1', label: 'Label 1' },
        { value: 'value2', label: 'Label 2' },
    ]

    cy.wrap(options).as('options')
    cy.window().then((win) => {
        win.updateCypressProps({ options })
    })
})

When('the user selects the first option', () => {
    cy.get('[data-test="dhis2-uicore-multiselect"]').click()
    cy.get('[data-test="dhis2-uicore-checkbox"]').first().click()
})

When('the user selects the second option', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"]').last().click()
})

Then("the form state's value equals the first option's value", () => {
    cy.getFormValue('multiSelect').then((selected) => {
        expect(selected).to.have.lengthOf(1)
        expect(selected).to.deep.equal(['value1'])
    })
})

Then("the form state's value contains both options", () => {
    cy.get('@options').then((options) => {
        cy.getFormValue('multiSelect').then((selected) => {
            expect(selected).to.have.lengthOf(options.length)
            expect(selected).to.deep.equal(['value1', 'value2'])
        })
    })
})
