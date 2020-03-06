import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar with permanent is rendered', () => {
    cy.visitStory('AlertBar', 'Permanent')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Then('the AlertBar will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})
