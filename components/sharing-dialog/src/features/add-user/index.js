import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

/**
 * a sharing dialog that allows adding entities is visible
 */

Given('a sharing dialog that allows adding entities is visible', () => {
    cy.visitStory('sharing-dialog', 'search')
    cy.contains('Give access to a user, group or role').should('be.visible')
})

/**
 * the user gives <target> <level> access
 */

When('the user gives user view only access', () => {
    cy.get('[placeholder="Search"]').type('A user')

    /**
     * This is necessary because the sharing dialog rerenders multiple times
     * after a search has been typed. So without the timeout the DOM node will
     * be detached whilst cypress is still working with it, causing an error.
     * We should address the unnecessary renders, after which this line can be
     * removed.
     */
    cy.wait(1000)
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A user').click()

    cy.contains('Select a level').click()
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'View only').click()

    cy.contains('button', 'Give access').click()
})

When('the user gives user view and edit access', () => {
    cy.get('[placeholder="Search"]').type('A user')

    /**
     * This is necessary because the sharing dialog rerenders multiple times
     * after a search has been typed. So without the timeout the DOM node will
     * be detached whilst cypress is still working with it, causing an error.
     * We should address the unnecessary renders, after which this line can be
     * removed.
     */
    cy.wait(1000)
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A user').click()

    cy.contains('Select a level').click()
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'View and edit').click()

    cy.contains('button', 'Give access').click()
})

When('the user gives group view only access', () => {
    cy.get('[placeholder="Search"]').type('A group')

    /**
     * This is necessary because the sharing dialog rerenders multiple times
     * after a search has been typed. So without the timeout the DOM node will
     * be detached whilst cypress is still working with it, causing an error.
     * We should address the unnecessary renders, after which this line can be
     * removed.
     */
    cy.wait(1000)
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A group').click()

    cy.contains('Select a level').click()
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'View only').click()

    cy.contains('button', 'Give access').click()
})

When('the user gives group view and edit access', () => {
    cy.get('[placeholder="Search"]').type('A group')

    /**
     * This is necessary because the sharing dialog rerenders multiple times
     * after a search has been typed. So without the timeout the DOM node will
     * be detached whilst cypress is still working with it, causing an error.
     * We should address the unnecessary renders, after which this line can be
     * removed.
     */
    cy.wait(1000)
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A group').click()

    cy.contains('Select a level').click()
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'View and edit').click()

    cy.contains('button', 'Give access').click()
})

/**
 * the <target> is added to the access list with <level> access
 */

Then('the user is added to the access list with view only access', () => {
    cy.contains('.sharing-list-item', 'A user')
        .should('be.visible')
        .as('user-item')

    cy.get('@user-item').contains('Can view').should('be.visible')
    cy.get('@user-item').contains('View only').should('be.visible')
})

Then('the user is added to the access list with view and edit access', () => {
    cy.contains('.sharing-list-item', 'A user')
        .should('be.visible')
        .as('user-item')

    cy.get('@user-item').contains('Can view and edit').should('be.visible')
    cy.get('@user-item').contains('View and edit').should('be.visible')
})

Then('the group is added to the access list with view only access', () => {
    cy.contains('.sharing-list-item', 'A group')
        .should('be.visible')
        .as('group-item')

    cy.get('@group-item').contains('Can view').should('be.visible')
    cy.get('@group-item').contains('View only').should('be.visible')
})

Then('the group is added to the access list with view and edit access', () => {
    cy.contains('.sharing-list-item', 'A group')
        .should('be.visible')
        .as('group-item')

    cy.get('@group-item').contains('Can view and edit').should('be.visible')
    cy.get('@group-item').contains('View and edit').should('be.visible')
})
