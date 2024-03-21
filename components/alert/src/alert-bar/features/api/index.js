require('../common/index.js')
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an AlertBar with onHidden handler is rendered', () => {
    cy.visitStory('AlertBar', 'With onHidden')
})

Given('an AlertBar with disabled icon is rendered', () => {
    cy.visitStory('AlertBar', 'Disabled icon')
})

Given('an AlertBar with custom icon is rendered', () => {
    cy.visitStory('AlertBar', 'Custom icon')
})

Given('an AlertBar with a message is rendered', () => {
    cy.visitStory('AlertBar', 'With message')
})

Given('an AlertBar with permanent is rendered', () => {
    cy.visitStory('AlertBar', 'Permanent')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the Alertbar is not rendered', () => {
    cy.wait(8000)
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('not.exist')
})

Then('the icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]').should('be.visible')
})

Then('the icon will not be rendered', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]').should('not.exist')
})

Then('the custom icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]')
        .contains('Custom icon')
        .should('be.visible')
})

Then('the message will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]')
        .contains('With a message')
        .should('be.visible')
})

Then('the AlertBar will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})
