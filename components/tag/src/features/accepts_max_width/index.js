import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'a tag with the default max width and enough content to fill it completely is rendered',
    () => {
        cy.wrap('240px').as('maxWidth')
        cy.visitStory('Tag', 'With default max width')
        cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
    }
)

Given(
    'a tag with a max width and enough content to fill it completely is rendered',
    () => {
        cy.wrap('30px').as('maxWidth')
        cy.visitStory('Tag', 'With custom max width')
        cy.get('[data-test="dhis2-uicore-tag"]').should('be.visible')
    }
)

Then('the width of the tag should be exactly the max width', () => {
    cy.all(
        () => cy.get('@maxWidth'),
        () => cy.get('[data-test="dhis2-uicore-tag"]')
    ).then(([maxWidth, tag]) => {
        expect(tag).to.have.css('width', maxWidth)
    })
})
