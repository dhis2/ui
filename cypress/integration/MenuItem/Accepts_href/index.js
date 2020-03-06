import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem with href is rendered', () => {
    cy.visitStory('MenuItem', 'With href')
})

Then('a link is rendered with the href', () => {
    cy.get('a')
        .should('have.attr', 'href')
        .and('include', 'url.test')
})
