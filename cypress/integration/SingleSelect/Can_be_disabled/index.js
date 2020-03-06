import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a disabled SingleSelect with options is rendered', () => {
    cy.visitStory('SingleSelect', 'With options and disabled')
})

Given(
    'a disabled SingleSelect with options and a selection is rendered',
    () => {
        cy.visitStory('SingleSelect', 'With options, a selection and disabled')
    }
)

Given('the SingleSelect is closed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Given('the SingleSelect is focused', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').focus()
    cy.focused().should('have.attr', 'data-test', 'dhis2-uicore-select-input')
})

When('the down arrowkey is pressed on the focused element', () => {
    cy.focused().type('{downarrow}')
})

When('the spacebar is pressed on the focused element', () => {
    cy.focused().type(' ')
})

When('the up arrowkey is pressed on the focused element', () => {
    cy.focused().type('{uparrow}')
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('be.visible')
})
