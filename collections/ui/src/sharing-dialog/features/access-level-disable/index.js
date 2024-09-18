import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import { disabledAccess } from '../fixtures/index.js'

Given('a sharing dialog without public access is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: disabledAccess,
    })

    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')
})

Then('the access control for all users should be disabled', () => {
    cy.contains('.details-text', 'All users')
        .should('be.visible')
        .closest('.wrapper')
        .as('all-users-list-item')

    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'No access')
        .should('be.visible')
        .click()

    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})
