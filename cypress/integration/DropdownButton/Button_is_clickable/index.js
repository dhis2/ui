import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a DropdownButton with onClick handler is rendered', () => {
    cy.visitStory('DropdownButton', 'With onClick')
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({
            name: 'Button',
            value: 'default',
            open: true,
        })
    })
})
