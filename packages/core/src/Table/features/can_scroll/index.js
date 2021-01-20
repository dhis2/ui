import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a scrolling table is rendered', () => {
    cy.visitStory('Table', 'Fixed Header And Columns')
})
When('the user scrolls down', () => {
    cy.get('[data-test="dhis2-uicore-table-scrollbox"]').scrollTo('bottomLeft')
})
When('the user scrolls right', () => {
    cy.get('[data-test="dhis2-uicore-table-scrollbox"]').scrollTo('topRight')
})
When('the user scrolls down and right', () => {
    cy.get('[data-test="dhis2-uicore-table-scrollbox"]').scrollTo('bottomRight')
})
Then('the header row is visible', () => {
    cy.get('thead > tr > th').should('be.visible')
})
Then('the first two table columns are visible', () => {
    cy.get('tbody > tr > th:nth-child(1)').should('be.visible')
    cy.get('tbody > tr > th:nth-child(2)').should('be.visible')
})
Then('the bottom right scrolling table cell is visible', () => {
    cy.get('td').contains('scrolling bottom-right').should('be.visible')
})
Then('the top left scrolling table cell is not visible', () => {
    cy.get('td').contains('scrolling top-left').should('not.be.visible')
})
Then('the bottom left scrolling table cell is not visible', () => {
    cy.get('td').contains('scrolling bottom-left').should('not.be.visible')
})
Then('the top right scrolling table cell is not visible', () => {
    cy.get('td').contains('scrolling top-right').should('not.be.visible')
})
Then('the top right scrolling table cell is visible', () => {
    cy.get('td').contains('scrolling top-right').should('be.visible')
})
Then('the bottom left scrolling table cell is visible', () => {
    cy.get('td').contains('scrolling bottom-left').should('be.visible')
})
Then('the bottom right scrolling table cell is not visible', () => {
    cy.get('td').contains('scrolling bottom-right').should('not.be.visible')
})
