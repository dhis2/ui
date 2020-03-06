import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options and a loading flag is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and loading')
})

Given(
    'a MultiSelect with options, a loading flag and a loading text is rendered',
    () => {
        cy.visitStory('MultiSelect', 'With options, loading and loading text')
    }
)

Then('the loading spinner is displayed', () => {
    cy.get('[data-test="dhis2-uicore-circularloader"]').should('be.visible')
})

Then('the loading text is displayed', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-loading"]')
        .contains('Loading options')
        .should('be.visible')
})
