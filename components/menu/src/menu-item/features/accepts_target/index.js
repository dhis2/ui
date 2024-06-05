import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MenuItem with target is rendered', () => {
    cy.visitStory('MenuItem', 'With Target')
})

Then('a link is rendered with the target', () => {
    cy.get('a').should('have.attr', 'target').and('include', '_blank')
})
