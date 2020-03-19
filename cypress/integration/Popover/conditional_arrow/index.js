import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default Popper is rendered with arrow set to true', () => {
    cy.visitStory('Popover', 'Default')
})
Given('a Popover is rendered with the arrow prop set to false', () => {
    cy.visitStory('Popover', 'No Arrow')
})
Then('there is an arrow element in the Popover', () => {
    cy.get('[data-popper-arrow="true"]').should('exist')
})
Then('there is no arrow element in the Popover', () => {
    cy.get('[data-popper-arrow="true"]').should('not.exist')
})
