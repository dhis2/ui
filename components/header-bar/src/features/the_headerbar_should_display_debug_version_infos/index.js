import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the HeaderBar is rendered with an app name and app version in runtime context', () => {
    cy.visitStory('HeaderBarTesting', 'default')
})

When('the user opens the profile menu', () => {
    cy.get('[data-test="headerbar-profile"] > button').click()
})

Then("the apps's name and version should be displayed", () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should(
        'contain',
        'TestApp 101.2.3-beta.4'
    )
})

Then(
    "the instance version should be displayed",
    () => {
        cy.get('[data-test="dhis2-ui-headerbar-instanceinfo"]').should(
            'contain',
            'DHIS2 2.39.2.1-SNAPSHOT'
        )
    }
)