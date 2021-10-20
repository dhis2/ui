import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

/**
 * a sharing dialog with <target> item with <initial> is visible
 */

Given('a sharing dialog with user item with view is visible', () => {
    cy.visitStory('sharing-dialog', 'user view access')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.share-details-text', 'A user')
        .should('be.visible')
        .contains('Can view')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('user-list-item')
})

Given('a sharing dialog with user item with view and edit is visible', () => {
    cy.visitStory('sharing-dialog', 'user view and edit access')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.share-details-text', 'A user')
        .should('be.visible')
        .contains('Can view and edit')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('user-list-item')
})

Given('a sharing dialog with group item with view is visible', () => {
    cy.visitStory('sharing-dialog', 'group view access')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.share-details-text', 'A group')
        .should('be.visible')
        .contains('Can view')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('group-list-item')
})

Given('a sharing dialog with group item with view and edit is visible', () => {
    cy.visitStory('sharing-dialog', 'group view and edit access')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.share-details-text', 'A group')
        .should('be.visible')
        .contains('Can view and edit')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('group-list-item')
})

/**
 * the user removes the access for the <target>
 */

When('the user removes the access for the user', () => {
    cy.get('@user-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains('Remove access').should('be.visible').click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user removes the access for the group', () => {
    cy.get('@group-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains('Remove access').should('be.visible').click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

/**
 * the <target> item should be removed
 */

Then('the user item should be removed', () => {
    cy.contains('.share-details-text', 'A user').should('not.exist')
})

Then('the group item should be removed', () => {
    cy.contains('.share-details-text', 'A group').should('not.exist')
})
