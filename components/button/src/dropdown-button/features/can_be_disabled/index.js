import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a disabled DropdownButton with onClick handler is rendered', () => {
    cy.visitStory('DropdownButton', 'Disabled with onClick')
})

When('the DropdownButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton"] button').click({
        force: true,
    })
})

Then('the onClick handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onClick).not.to.be.called
    })
})
