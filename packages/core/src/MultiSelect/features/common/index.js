import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options and onChange handler is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and onChange')
})

Given(
    'a MultiSelect with options, a selection and onChange handler is rendered',
    () => {
        cy.visitStory('MultiSelect', 'With options, a selection and onChange')
    }
)

Given('a MultiSelect is rendered to which options can be added', () => {
    cy.visitStory('MultiSelect', 'With options that can be added to the input')
    cy.get('[data-test="dhis2-uicore-multiselect"]').should('exist')
})

Given('the MultiSelect is open', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()

    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
})

When('the MultiSelect input is clicked', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

When('the user clicks the backdrop layer', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click()
})

Then('the options are not displayed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Then('the options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
})

Then('the MultiSelect has focus', () => {
    cy.focused().should('have.attr', 'data-test', 'dhis2-uicore-select-input')
})
