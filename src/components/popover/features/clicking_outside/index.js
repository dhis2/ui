import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a default Popper is rendered with arrow set to true', () => {
    cy.visitStory('Popover', 'Default')
})
Given('a default Popover is rendered with an onClickOutside handler', () => {
    cy.visitStory('Popover', 'With On Click Outside')
})
When('the user clicks outside of the Popover', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click()
})
Then('the clickOutside handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClickOutside).to.be.calledOnce
    })
})
