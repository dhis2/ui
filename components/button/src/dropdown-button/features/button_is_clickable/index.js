require('../common/index.js')
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a DropdownButton with onClick handler is rendered', () => {
    cy.visitStory('DropdownButton', 'With onClick')
})

Then('the onClick handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClick).to.be.calledWith({
            name: 'Button',
            value: 'default',
            open: true,
        })
    })
})
