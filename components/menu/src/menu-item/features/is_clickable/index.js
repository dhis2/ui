import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MenuItem with onClick handler and value is rendered', () => {
    cy.visitStory('MenuItem', 'With On Click And Value')
})

When('the MenuItem is clicked', () => {
    cy.get('[data-test="dhis2-uicore-menuitem"]').click()
})

Then('the onClick handler is called with value', () => {
    cy.window().should((win) => {
        expect(win.onClick).to.be.calledWith({
            value: 'Value',
        })
    })
})
