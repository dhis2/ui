import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem with target is rendered', () => {
    cy.visitStory('MenuItem', 'With target')
})

Then('a link is rendered with the target', () => {
    cy.get('a')
        .should('have.attr', 'target')
        .and('include', '_blank')
})
