import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'the HeaderBar is rendered without an instance version in runtime context',
    () => {
        cy.visitStory('HeaderBarTesting', 'With Unknown Instance Version')
    }
)

Given(
    'the HeaderBar is rendered with an app name and app version in runtime context',
    () => {
        cy.visitStory('HeaderBarTesting', 'default')
    }
)

Given('the HeaderBar is rendered without app name in runtime context', () => {
    cy.visitStory('HeaderBarTesting', 'With Unknown App Name')
})

Given(
    'the HeaderBar is rendered with an app name but without app version in runtime context',
    () => {
        cy.visitStory('HeaderBarTesting', 'With Unknown App Version')
    }
)

Given(
    'the HeaderBar is rendered without app name or app version in runtime context',
    () => {
        cy.visitStory('HeaderBarTesting', 'With Unknown App Name And Version')
    }
)

When('the user opens the profile menu', () => {
    cy.get('[data-test="headerbar-profile"] > button').click()
})

Then("the app's name and version should be displayed", () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should(
        'contain',
        'TestApp 101.2.3-beta.4'
    )
})

Then("the app's name with unknown version should be displayed", () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should(
        'contain',
        'TestApp version unknown'
    )
})

Then("the unknown app with app's version should be displayed", () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should(
        'contain',
        'App 101.2.3-beta.4'
    )
})

Then('the unknown app with unknown version should be displayed', () => {
    cy.get('[data-test="dhis2-ui-headerbar-appinfo"]').should(
        'contain',
        'App version unknown'
    )
})

Then('the instance version should be displayed', () => {
    cy.get('[data-test="dhis2-ui-headerbar-instanceinfo"]').should(
        'contain',
        'DHIS2 2.39.2.1-SNAPSHOT'
    )
})

Then('the instance version should show as unknown', () => {
    cy.get('[data-test="dhis2-ui-headerbar-instanceinfo"]').should(
        'contain',
        'DHIS2 version unknown'
    )
})

When('the user clicks the debug info menu item', () => {
    cy.get('[data-test="dhis2-ui-headerbar-debuginfo"] > a').click()
})

Then('the debug info modal should be shown', () => {
    cy.get('[data-test="dhis2-ui-headerbar-debuginfomodal"]').should(
        'be.visible'
    )
})
Then('the debug info modal should not be shown', () => {
    cy.get('[data-test="dhis2-ui-headerbar-debuginfomodal"]').should(
        'not.exist'
    )
})

Then('the debug info modal should contain debug info', () => {
    cy.get('[data-test="dhis2-ui-headerbar-debuginfotable"]')
        .should(
            'contain',
            '2.39.2.1-SNAPSHOT' // DHIS2 version
        )
        .should(
            'contain',
            '6607c3c' // Revision
        )
        .should(
            'contain',
            'TestApp' // App name
        )
        .should(
            'contain',
            '101.2.3-beta.4' // App version
        )
})

When('the user clicks the copy debug info button', () => {
    cy.contains('Copy debug info').click()
})

Then('the debug info should be copied to clipboard', () => {
    cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
            expect(text).to.contain('2.39.2.1-SNAPSHOT')
        })
    })
})

Then('the debug info copied to clipboard alert should be shown', () => {
    cy.contains('Debug information copied to clipboard').should('exist')
})
