import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a NoticeBox receives a title prop', () => {
    cy.visitStory('NoticeBox', 'With title')
    cy.get('[data-test="dhis2-uicore-noticebox"]').should('be.visible')
})

Then('the title is visible', () => {
    cy.get('[data-test="dhis2-uicore-noticebox-content-title"]')
        .contains('The noticebox title')
        .should('be.visible')
})
