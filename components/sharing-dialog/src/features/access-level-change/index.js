import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

/**
 * a sharing dialog with <target> item with <initial> is visible
 */

Given('a sharing dialog with all users item with no access is visible', () => {
    cy.visitStory('sharing-dialog', 'all users no access')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.share-details-text', 'All users')
        .should('be.visible')
        .contains('No access')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('all-users-list-item')

    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'No access')
        .should('be.visible')

    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
        .should('be.visible')
})

Given('a sharing dialog with user item with view is visible', () => {
    cy.visitStory('sharing-dialog', 'user view access')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.share-details-text', 'A user')
        .should('be.visible')
        .contains('Can view')
        .should('be.visible')
        .closest('.sharing-list-item')
        .as('user-list-item')

    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')

    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
        .should('be.visible')
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

    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')

    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
        .should('be.visible')
})

/**
 * the user sets the <target> access level to <changed>
 */

When('the user sets the all users access level to view only', () => {
    cy.get('@all-users-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-menuitem"]',
        'View only'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.contains('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the all users access level to view and edit', () => {
    cy.get('@all-users-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-menuitem"]',
        'View and edit'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.contains('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the user access level to view and edit', () => {
    cy.get('@user-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-menuitem"]',
        'View and edit'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.contains('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the group access level to view and edit', () => {
    cy.get('@group-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-menuitem"]',
        'View and edit'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.contains('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

/**
 * the <target> access control is set to <changed>
 */

Then('the all users access control is set to view only', () => {
    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')
})

Then('the all users access control is set to view and edit', () => {
    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Then('the user access control is set to view and edit', () => {
    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Then('the group access control is set to view and edit', () => {
    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

/**
 * the <target> section is labeled for <changed>
 */

Given('the all users section is labeled for view only', () => {
    cy.get('@all-users-list-item')
        .contains('.share-details-text', 'Anyone logged in can view')
        .should('be.visible')
})

Given('the all users section is labeled for view and edit', () => {
    cy.get('@all-users-list-item')
        .contains('.share-details-text', 'Anyone logged in can view and edit')
        .should('be.visible')
})

Given('the user section is labeled for view and edit', () => {
    cy.get('@user-list-item')
        .contains('.share-details-text', 'Can view and edit')
        .should('be.visible')
})

Given('the group section is labeled for view and edit', () => {
    cy.get('@group-list-item')
        .contains('.share-details-text', 'Can view and edit')
        .should('be.visible')
})
