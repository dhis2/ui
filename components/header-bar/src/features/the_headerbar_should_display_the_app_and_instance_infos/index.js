import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the HeaderBar is rendered with an app name and app version', () => {
    cy.visitStory('HeaderBarTesting', 'instance and app infos')
})

Given(
    'the HeaderBar is rendered with an app name but without an app version',
    () => {
        cy.visitStory('HeaderBarTesting', 'default')
    }
)

Given('the instance infos are being fetched', () => {
    cy.visitStory('HeaderBarTesting', 'instance infos are loading')
})

Given('fetching the instance infos failed', () => {
    cy.visitStory('HeaderBarTesting', 'loading instance infos failed')
})

When('the user opens the profile menu', () => {
    cy.get('[data-test="headerbar-profile"] > button').click()
})

Then("the apps's name and version should be displayed", () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should(
        'contain',
        'Data Visualizer 100.3.2'
    )
})

Then("the apps's name and version should not be displayed", () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should('not.exist')
})

Then(
    "the instance's name, version and build revision should be displayed",
    () => {
        cy.get('[data-test="dhis2-ui-headerbar-instanceinfo"]').should(
            'contain',
            'DHIS2 2.38-SNAPSHOT, Build 6607c3c'
        )
    }
)

Then('a loading message should be displayed', () => {
    cy.get('[data-test="dhis2-ui-headerbar-instanceinfo"]').should(
        'contain',
        'Checking DHIS2 version...'
    )
})

Then('an error message should be displayed', () => {
    cy.get('[data-test="dhis2-ui-headerbar-instanceinfo"]').should(
        'contain',
        'There was a problem getting DHIS2 version.'
    )
})
