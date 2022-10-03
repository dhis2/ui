import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the HeaderBar is rendered without an available update', () => {
    cy.visitStory('HeaderBarTesting', 'default')
})

Given('the HeaderBar is rendered with an available update', () => {
    cy.visitStory('HeaderBarTesting', 'With Update Available Notification')
})

Given(
    'the HeaderBar is rendered with no app name and an available update',
    () => {
        cy.visitStory(
            'HeaderBarTesting',
            'With Update Available Notification No App Name'
        )
    }
)

When('the user opens the profile menu', () => {
    cy.get('[data-test="headerbar-profile"] > button').click()
})

Then('the update notification should not be displayed', () => {
    cy.get('[data-test="dhis2-ui-headerbar-updatenotification"]').should(
        'not.exist'
    )
})

Then('the update notification should be displayed', () => {
    cy.get('[data-test="dhis2-ui-headerbar-updatenotification"]')
        .should('contain', 'New Data Visualizer version available')
        .should('contain', 'Click to reload')
})

Then('the update notification should be displayed without app name', () => {
    cy.get('[data-test="dhis2-ui-headerbar-updatenotification"]')
        .should('contain', 'New app version available')
        .should('contain', 'Click to reload')
})

When('the user clicks the update notification', () => {
    cy.get('[data-test="dhis2-ui-headerbar-updatenotification"]').click()
})

Then('the profile menu should not be shown', () => {
    cy.get('[data-test="headerbar-profile-menu"]').should('not.exist')
})
Then('a callback should display a test div', () => {
    cy.contains('The callback was successful').should('be.visible')
})
