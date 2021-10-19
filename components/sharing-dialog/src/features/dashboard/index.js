import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a sharing dialog of the dashboard type is visible', () => {
    cy.visitStory('sharing-dialog', 'dashboard')
})

Given('the two dashboard tabs are visible', () => {
    cy.contains('button', 'Dashboard sharing').should('be.visible')
    cy.contains('button', 'Apply sharing to dashboard visualizations').should(
        'be.visible'
    )
})

When('the apply sharing tab is clicked', () => {
    cy.contains('button', 'Apply sharing to dashboard visualizations').click()
})

Then('the correct counts are displayed', () => {
    /**
     * The visualization count comes from the dashboarditems returned by the backend.
     * The only types that are counted are: 'VISUALIZATION', 'MAP', 'EVENT_CHART' and
     * 'EVENT_REPORT'. The user and group count adds the lengths of the userAccesses
     * and userGroupAccesses arrays returned by the backend.
     */

    cy.contains(
        '4 visualization on this dashboard will potentially get updated sharing settings. These updated sharing settings will apply to 2 user or group.'
    ).should('be.visible')
})

Then('the apply sharing button is visible', () => {
    cy.contains('Apply sharing to dashboard visualizations').should(
        'be.visible'
    )
})
