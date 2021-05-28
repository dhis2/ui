import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar with a message is rendered', () => {
    cy.visitStory('AlertBar', 'With message')
})

Then('the message will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]')
        .contains('With a message')
        .should('be.visible')
})
