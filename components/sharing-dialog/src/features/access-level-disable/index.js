import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a sharing dialog without public access is visible', () => {
    cy.visitStory('sharing-dialog', 'disabled access')
    cy.contains('Sharing and access').should('be.visible')
})

Then('the access control for all users should be disabled', () => {
    cy.contains('.share-details-text', 'All users')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('all-users-list-item')

    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'No access')
        .should('be.visible')
        .click()

    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})
