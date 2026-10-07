import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the AlertBar message has the status role', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-message"]')
        .find('[role="status"]')
        .should('exist')
})

Then('the AlertBar message has the alert role', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-message"]')
        .find('[role="alert"]')
        .should('exist')
})

Then('the icon is hidden from assistive technologies', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]').should(
        'have.attr',
        'aria-hidden',
        'true'
    )
})

Then('the dismiss control is a button labelled "Dismiss"', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-dismiss"]')
        .should('match', 'button')
        .and('have.attr', 'aria-label', 'Dismiss')
})
