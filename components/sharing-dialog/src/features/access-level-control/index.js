import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a sharing dialog with an all users item is visible', () => {
    cy.visitStory('sharing-dialog', 'all users')
    cy.contains('Sharing and access').should('be.visible')
    cy.contains('.share-details-text', 'All users').should('be.visible')
})

Given('the all users section is labeled no access', () => {
    cy.contains('.share-details-text', 'No access').should('be.visible')
})

Given('the access control is set to no access', () => {
    cy.contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata').should(
        'be.visible'
    )

    cy.contains('[data-test="dhis2-uicore-singleselect"]', 'No access').should(
        'be.visible'
    )
})

When('the user sets the access level to view only', () => {
    cy.contains('[data-test="dhis2-uicore-singleselect"]', 'No access').click()
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

When('the user sets the access level to view and edit', () => {
    cy.contains('[data-test="dhis2-uicore-singleselect"]', 'No access').click()
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

Then('the access control is set to view only', () => {
    cy.contains('[data-test="dhis2-uicore-singleselect"]', 'View only').should(
        'be.visible'
    )
})

Then('the access control is set to view and edit', () => {
    cy.contains(
        '[data-test="dhis2-uicore-singleselect"]',
        'View and edit'
    ).should('be.visible')
})

Given('the all users section is labeled for view only', () => {
    cy.contains('.share-details-text', 'Anyone logged in can view').should(
        'be.visible'
    )
})

Given('the all users section is labeled for view and edit', () => {
    cy.contains(
        '.share-details-text',
        'Anyone logged in can view and edit'
    ).should('be.visible')
})
