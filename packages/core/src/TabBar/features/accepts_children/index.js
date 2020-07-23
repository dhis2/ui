import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a TabBar with children is rendered', () => {
    cy.visitStory('TabBar', 'With children')
    cy.get('[data-test="dhis2-uicore-tabbar"]').should('be.visible')
})

Given('a scrollable TabBar with children is rendered', () => {
    cy.visitStory('TabBar', 'Scrollable with children')
    cy.get('[data-test="dhis2-uicore-tabbar"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.get('[data-test="dhis2-uicore-tabbar"]')
        .contains('I am a child')
        .should('be.visible')
})
