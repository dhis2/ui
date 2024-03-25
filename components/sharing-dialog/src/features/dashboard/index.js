import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { dashboards, dashboardSharing } from '../fixtures/index.js'

Given('a sharing dialog of the dashboard type is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=dashboard&id=id', {
        body: dashboardSharing,
    })
    cy.visitStory('sharing-dialog', 'dashboard')
})

Given('the two dashboard tabs are visible', () => {
    cy.contains('button', 'Dashboard sharing').should('be.visible')
    cy.contains('button', 'Apply sharing to dashboard visualizations').should(
        'be.visible'
    )
})

When('the apply sharing tab is clicked', () => {
    cy.intercept(
        'GET',
        '/api/38/dashboards/id?fields=dashboardItems%5Btype%5D',
        {
            body: dashboards,
        }
    )
    cy.contains('button', 'Apply sharing to dashboard visualizations').click()
})

When('the apply sharing button is clicked', () => {
    cy.intercept('POST', '/api/38/dashboards/cascadeSharing/id', {
        // Response to simulate a successful update for all items
        body: {
            errorReports: [],
            countUpdatedDashboardItems: 4,
        },
    })

    cy.contains(
        '[data-test="dhis2-uicore-button"]',
        'Apply sharing to dashboard visualizations'
    ).click()
})

When('the apply sharing button is clicked and the backend fails', () => {
    cy.intercept('POST', '/api/38/dashboards/cascadeSharing/id', {
        statusCode: 500,
    })

    cy.contains(
        '[data-test="dhis2-uicore-button"]',
        'Apply sharing to dashboard visualizations'
    ).click()
})

Then('the correct counts should be displayed', () => {
    /**
     * The visualization count comes from the dashboarditems returned by the backend.
     * The only types that are counted are: 'VISUALIZATION', 'MAP', 'EVENT_CHART' and
     * 'EVENT_REPORT'. The user and group count adds the lengths of the userAccesses
     * and userGroupAccesses arrays returned by the backend.
     */

    cy.contains(
        'Number of visualizations on this dashboard that will potentially get updated sharing settings: 4. The number of users or groups that these updated settings will apply to: 2.'
    ).should('be.visible')
})

Then('the apply sharing button should be visible', () => {
    cy.contains(
        '[data-test="dhis2-uicore-button"]',
        'Apply sharing to dashboard visualizations'
    ).should('be.visible')
})

Then('a result message should be displayed', () => {
    cy.contains('Successfully updated sharing for all visualizations.').should(
        'be.visible'
    )
})

Then('an alert with the error message should be displayed', () => {
    cy.contains(
        'An unknown error occurred - Internal Server Error (500)'
    ).should('be.visible')
})
