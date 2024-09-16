import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a disabled DropdownButton with onClick handler is rendered', () => {
    cy.visitStory('DropdownButton', 'Disabled with on click')
})

Then('the onClick handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onClick).not.to.be.called
    })
})
