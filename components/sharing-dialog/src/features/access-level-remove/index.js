import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import {
    userNoAccess,
    userViewAccess,
    userViewEditAccess,
    groupNoAccess,
    groupViewAccess,
    groupViewEditAccess,
} from '../fixtures/index.js'

/**
 * a sharing dialog with <target> item with <initial> is visible
 */

Given('a sharing dialog with user item with view is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: userViewAccess,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A user')
        .should('be.visible')
        .contains('Can view')
        .should('be.visible')
        .closest('.wrapper')
        .as('user-list-item')
})

Given('a sharing dialog with user item with view and edit is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: userViewEditAccess,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A user')
        .should('be.visible')
        .contains('Can view and edit')
        .should('be.visible')
        .closest('.wrapper')
        .as('user-list-item')
})

Given('a sharing dialog with group item with view is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupViewAccess,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A group')
        .should('be.visible')
        .contains('Can view')
        .should('be.visible')
        .closest('.wrapper')
        .as('group-list-item')
})

Given('a sharing dialog with group item with view and edit is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupViewEditAccess,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A group')
        .should('be.visible')
        .contains('Can view and edit')
        .should('be.visible')
        .closest('.wrapper')
        .as('group-list-item')
})

/**
 * the user removes the access for the <target>
 */

When('the user removes the access for the user', () => {
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: userNoAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })

    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: userNoAccess,
    })

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
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: groupNoAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })

    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupNoAccess,
    })

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
    cy.contains('.details-text', 'A user').should('not.exist')
})

Then('the group item should be removed', () => {
    cy.contains('.details-text', 'A group').should('not.exist')
})
