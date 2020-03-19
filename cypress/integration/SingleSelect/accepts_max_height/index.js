import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with more than ten options is rendered', () => {
    cy.visitStory('SingleSelect', 'With more than ten options')
})

Given(
    'a SingleSelect with more than three options and a 100px max-height is rendered',
    () => {
        cy.visitStory(
            'SingleSelect',
            'With more than three options and a 100px max-height'
        )
    }
)

Given('the SingleSelect is open', () => {
    cy.get('[data-test="dhis2-uicore-select"]').click()
})

Then('the top nine options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
    cy.contains('option four').should('be.visible')
    cy.contains('option five').should('be.visible')
    cy.contains('option six').should('be.visible')
    cy.contains('option seven').should('be.visible')
    cy.contains('option eight').should('be.visible')
    cy.contains('option nine').should('be.visible')
    cy.contains('option ten').should('not.be.visible')
    cy.contains('option eleven').should('not.be.visible')
    cy.contains('option twelve').should('not.be.visible')
})

Then('the top three options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
    cy.contains('option four').should('not.be.visible')
    cy.contains('option five').should('not.be.visible')
    cy.contains('option six').should('not.be.visible')
    cy.contains('option seven').should('not.be.visible')
    cy.contains('option eight').should('not.be.visible')
    cy.contains('option nine').should('not.be.visible')
    cy.contains('option ten').should('not.be.visible')
    cy.contains('option eleven').should('not.be.visible')
    cy.contains('option twelve').should('not.be.visible')
})
