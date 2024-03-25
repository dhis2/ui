import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a NoticeBox receives a message as children', () => {
    cy.visitStory('NoticeBox', 'With children')
    cy.get('[data-test="dhis2-uicore-noticebox"]').should('be.visible')
})

Then('the message is visible', () => {
    cy.get('[data-test="dhis2-uicore-noticebox-content-message"]')
        .contains('The noticebox content')
        .should('be.visible')
})
