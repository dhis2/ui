import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Checkbox with onChange handler is rendered', () => {
    cy.visitStory('Checkbox', 'With on change')
})

When('the Checkbox is clicked', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"]').click()
})

Then('the onChange handler is called', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
