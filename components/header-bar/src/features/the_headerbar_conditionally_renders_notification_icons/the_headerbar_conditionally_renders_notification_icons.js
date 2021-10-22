import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the user has the ALL authority', () => {
    cy.visitStory('HeaderBarTesting', 'User Has All Authority')
})

Given(
    'the user has the M_dhis-web-interpretation and M_dhis-web-messaging authority',
    () => {
        cy.visitStory(
            'HeaderBarTesting',
            'User Has Web Interpretation And Messaging Authority'
        )
    }
)

Given('the user has the M_dhis-web-interpretation authority', () => {
    cy.visitStory('HeaderBarTesting', 'User Has Web Interpretation Authority')
})

Given('the user has the M_dhis-web-messaging authority', () => {
    cy.visitStory('HeaderBarTesting', 'User Has Web Messaging Authority')
})

Given('the user has authority for none of the apps', () => {
    cy.visitStory('HeaderBarTesting', 'User Has No Authorities')
})

Then('the messaging app icon is not rendered', () => {
    cy.get('[data-test="headerbar-messages"]').should('not.exist')
})

Then('the messaging app icon is rendered', () => {
    cy.get('[data-test="headerbar-messages"]').should('exist')
})

Then('the interpretations app icon is not rendered', () => {
    cy.get('[data-test="headerbar-interpretations"]').should('not.exist')
})

Then('the interpretations app icon is rendered', () => {
    cy.get('[data-test="headerbar-interpretations"]').should('exist')
})
