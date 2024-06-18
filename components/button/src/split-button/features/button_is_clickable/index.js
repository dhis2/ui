import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SplitButton with onClick hander is rendered', () => {
    cy.visitStory('SplitButton', 'With on click')
})

Then('the onClick handler is called', () => {
    cy.window().its('onClick').should('be.calledWith', {
        name: 'Button',
        value: 'default',
        open: false,
    })
})
