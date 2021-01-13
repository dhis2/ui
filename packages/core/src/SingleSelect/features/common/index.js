import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with options and onChange handler is rendered', () => {
    cy.visitStory('SingleSelect', 'With options and onChange')
})

Given(
    'a SingleSelect with options, a selection and onChange handler is rendered',
    () => {
        cy.visitStory('SingleSelect', 'With options, a selection and onChange')
    }
)

Given('the SingleSelect is open', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()

    cy.contains('option one').should('exist')
    cy.contains('option two').should('exist')
    cy.contains('option three').should('exist')
})

When('the SingleSelect input is clicked', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

When('the user clicks the backdrop layer', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click()
})

Then('the options are not rendered', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Then('the options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
})

Then('the SingleSelect has focus', () => {
    cy.focused().should('have.attr', 'data-test', 'dhis2-uicore-select-input')
})
