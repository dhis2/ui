import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Button with onClick handler is rendered', () => {
    cy.visitStory('Button', 'With onClick')
})

When('the Button is clicked', () => {
    cy.get('[data-test="dhis2-uicore-button"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClick).to.be.calledWith({
            name: 'Button',
            value: 'default',
        })
    })
})
