import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MenuItem with href is rendered', () => {
    cy.visitStory('MenuItem', 'With Href')
})

Then('a link is rendered with the href', () => {
    cy.get('a').should('have.attr', 'href').and('include', 'url.test')
})
