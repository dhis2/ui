import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

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
