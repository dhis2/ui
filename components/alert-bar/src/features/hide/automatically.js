import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar with a custom duration is rendered', () => {
    cy.visitStory('AlertBar', 'Custom duration')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the custom duration has passed', () => {
    cy.wait(2000)
})

When('the default duration has passed', () => {
    cy.wait(8000)
})
