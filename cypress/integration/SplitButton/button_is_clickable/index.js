import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with onClick hander is rendered', () => {
    cy.visitStory('SplitButton', 'With onClick')
})

Then('the onClick handler is called', () => {
    cy.window()
        .its('onClick')
        .should('be.calledWith', {
            name: 'Button',
            value: 'default',
            open: false,
        })
})
