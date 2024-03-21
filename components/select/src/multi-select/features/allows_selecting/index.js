require('../common/index.js')
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'a MultiSelect with a disabled option and onChange handler is rendered',
    () => {
        cy.visitStory('MultiSelect', 'With disabled option and onChange')
    }
)

Given(
    'a MultiSelect with custom options and onChange handler is rendered',
    () => {
        cy.visitStory('MultiSelect', 'With custom options and onChange')
    }
)

When('an option is clicked', () => {
    cy.contains('option one').click()
})

When('the selected option is clicked', () => {
    cy.get(
        '[data-test="dhis2-uicore-multiselectoption"]:contains("option one")'
    ).click()
})

When('another option is clicked', () => {
    cy.contains('option two').click()
})

When("the chip's X is clicked", () => {
    cy.get('[data-test="dhis2-uicore-chip-remove"]').click()
})

When('the disabled option is clicked', () => {
    cy.contains('disabled option').click()
})

When('the selected option is clicked again', () => {
    cy.get(
        '[data-test="dhis2-uicore-multiselectoption"]:contains("option one")'
    ).click()
})

Then('the clicked option is selected', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: ['1'],
        })
    })
})

Then('the clicked option is selected as well', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: ['1', '2'],
        })
    })
})

Then('the selected option is deselected', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({ selected: [] })
    })
})

Then('the onchange handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.not.be.called
    })
})

Then('the previously selected option is deselected', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledTwice
        expect(win.onChange).to.be.calledWith({ selected: [] })
    })
})
