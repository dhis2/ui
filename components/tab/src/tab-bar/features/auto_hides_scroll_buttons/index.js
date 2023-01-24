/* global before,after */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const handler = (err) => {
    // > This error means that ResizeObserver was not able to deliver all
    // > observations within a single animation frame. It is benign (your site
    // > will not break). – Aleksandar Totic Apr 15 at 3:14
    // -----
    // https://stackoverflow.com/a/50387233
    if (err.message.match('ResizeObserver loop limit exceeded')) {
        return false
    }
}

before(() => {
    Cypress.on('uncaught:exception', handler)
})

after(() => {
    Cypress.off('uncaught:exception', handler)
})

Given('a tabbar with enough space for all tabs is rendered', () => {
    cy.viewport(1024, 768)
    cy.visitStory('TabBar', 'Scrollable with some tabs')
})

Given('the tabbar is scrollable', () => {
    cy.get('.scroll-area').should('exist')
})

Given('a tabbar with too little space for all tabs is rendered', () => {
    cy.viewport(300, 768)
    cy.visitStory('TabBar', 'Scrollable with some tabs')
})

When('the tabs are visible', () => {
    cy.get('[data-test="dhis2-uicore-tab"]').should('exist')
})

When("the tabbar's width increases", () => {
    cy.viewport(1024, 768)
})

When("the tabbar's width decreases", () => {
    cy.viewport(300, 768)
})

Then('no scroll buttons should be visible', () => {
    cy.get('.scroll-button:visible').should('not.exist')
})

Then('both scroll buttons should be visible', () => {
    cy.get('.scroll-button:visible').should('have.length.of', 2)
})
