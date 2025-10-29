import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import {
    userNoAccess,
    userViewAccess,
    userViewEditAccess,
    userAllAuthority,
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
    cy.intercept('GET', '/api/38/me?fields=id,userGroups%5Bid%5D,authorities', {
        body: userAllAuthority,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A user')
        .should('be.visible')
        .contains('user-1')
        .should('be.visible')
        .closest('.wrapper')
        .as('user-list-item')

    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')
})

Given('a sharing dialog with user item with view and edit is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: userViewEditAccess,
    })
    cy.intercept('GET', '/api/38/me?fields=id,userGroups%5Bid%5D,authorities', {
        body: userAllAuthority,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A user')
        .should('be.visible')
        .contains('user-1')
        .should('be.visible')
        .closest('.wrapper')
        .as('user-list-item')

    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Given('a sharing dialog with group item with view is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupViewAccess,
    })
    cy.intercept('GET', '/api/38/me?fields=id,userGroups%5Bid%5D,authorities', {
        body: userAllAuthority,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A group')
        .should('be.visible')
        .contains('User group')
        .should('be.visible')
        .closest('.wrapper')
        .as('group-list-item')

    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')
})

Given('a sharing dialog with group item with view and edit is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupViewEditAccess,
    })
    cy.intercept('GET', '/api/38/me?fields=id,userGroups%5Bid%5D,authorities', {
        body: userAllAuthority,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'A group')
        .should('be.visible')
        .contains('User group')
        .should('be.visible')
        .closest('.wrapper')
        .as('group-list-item')

    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Given(
    'a sharing dialog with user group item with View and edit is visible and user has access through group',
    () => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: groupViewEditAccess,
        })
        cy.intercept(
            'GET',
            '/api/38/me?fields=id,userGroups%5Bid%5D,authorities',
            {
                body: {
                    id: 'currentUSER',
                    authorities: [],
                    userGroups: [{ id: 'group-1' }],
                },
            }
        )
        cy.visitStory('sharing-dialog', 'prevent')
        cy.contains('Sharing and access').should('be.visible')

        cy.contains('.details-text', 'A group')
            .should('be.visible')
            .contains('User group')
            .should('be.visible')
            .closest('.wrapper')
            .as('group-list-item')

        cy.get('@group-list-item')
            .contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'View and edit'
            )
            .should('be.visible')
    }
)

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

When('the user attemps to remove the access for the group', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupNoAccess,
    })

    cy.get('@group-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains('Remove access').should('be.visible').click()

    // Menu will not automatically be closed when onRemvoe is triggered but is unsuccessful, so click outside menu
    cy.get('body').click(0, 0)
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

/**
 * the <target> item is not removed because user would lose access
 */

Then(
    'the user group access control should remain with View and edit access',
    () => {
        cy.get('@group-list-item')
            .contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'View and edit'
            )
            .should('be.visible')
    }
)
