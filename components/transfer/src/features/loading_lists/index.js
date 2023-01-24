import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the source list is loading', () => {
    cy.visitStory('Transfer Loading Lists', 'Loading Source')
    cy.wrap('source').as('listType')
})

Given('the picked list is loading', () => {
    cy.visitStory('Transfer Loading Lists', 'Loading Picked')
    cy.wrap('picked').as('listType')
})

Given('the source list is not loading', () => {
    cy.visitStory('Transfer Loading Lists', 'Not Loading Source')
    cy.wrap('source').as('listType')
})

Given('the picked list is not loading', () => {
    cy.visitStory('Transfer Loading Lists', 'Not Loading Picked')
    cy.wrap('picked').as('listType')
})

Then('the loading indicator should be shown', () => {
    cy.get('@listType').then((listType) => {
        const listSelector =
            listType === 'source'
                ? '{transfer-leftside}'
                : '{transfer-rightside}'

        cy.get(`${listSelector} .loading`).should('exist')
    })
})

Then('the loading indicator should not be shown', () => {
    cy.get('@listType').then((listType) => {
        const listSelector =
            listType === 'source'
                ? '{transfer-leftside}'
                : '{transfer-rightside}'

        cy.get(`${listSelector} .loading`).should('not.exist')
    })
})
