import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

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
    cy.get('[data-test="dhis2-uicore-backdrop"]')
        .contains('option one')
        .click()
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

Then('the clicked option is selected', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: [{ label: 'option one', value: '1' }],
        })
    })
})

Then('the clicked option is selected as well', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: [
                { label: 'option one', value: '1' },
                { label: 'option two', value: '2' },
            ],
        })
    })
})

Then('the selected option is deselected', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({ selected: [] })
    })
})

Then('the onchange handler is not called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.not.be.called
    })
})
