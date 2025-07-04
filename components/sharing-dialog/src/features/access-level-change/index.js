import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import {
    allUsersNoAccess,
    allUsersViewAccess,
    allUsersViewEditAccess,
    userViewAccess,
    userViewEditAccess,
    userAllAuthority,
    groupViewAccess,
    groupViewEditAccess,
} from '../fixtures/index.js'

/**
 * a sharing dialog with <target> item with <initial> is visible
 */

Given('a sharing dialog with all users item with no access is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: allUsersNoAccess,
    })
    cy.intercept('GET', '/api/38/me?fields=id,userGroups%5Bid%5D,authorities', {
        body: userAllAuthority,
    })
    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Sharing and access').should('be.visible')

    cy.contains('.details-text', 'All users')
        .should('be.visible')
        .contains('Anyone logged in')
        .should('be.visible')
        .closest('.wrapper')
        .as('all-users-list-item')

    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'No access')
        .should('be.visible')

    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
        .should('be.visible')
})

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

    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
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

    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
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
        cy.visitStory('sharing-dialog', 'visualization')
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

        cy.get('@group-list-item')
            .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
            .should('be.visible')
    }
)

Given(
    'a sharing dialog with user group item with View and edit is visible and user has access through group and preventUsersFromRemovingMetadataWriteAccess=true',
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

        cy.get('@group-list-item')
            .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
            .should('be.visible')
    }
)

Given(
    'a sharing dialog with user group item with View and edit is visible and user has all authority',
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
                    authorities: ['ALL'],
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

        cy.get('@group-list-item')
            .contains('[data-test="dhis2-uicore-singleselect"]', 'Metadata')
            .should('be.visible')
    }
)

/**
 * the user sets the <target> access level to <changed>
 */

When('the user sets the all users access level to view only', () => {
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: allUsersViewAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })

    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: allUsersViewAccess,
    })

    cy.get('@all-users-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
        'View only'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the all users access level to view and edit', () => {
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: allUsersViewEditAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: allUsersViewEditAccess,
    })

    cy.get('@all-users-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
        'View and edit'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the user access level to view and edit', () => {
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: userViewEditAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: userViewEditAccess,
    })

    cy.get('@user-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
        'View and edit'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the group access level to view and edit', () => {
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: groupViewEditAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupViewEditAccess,
    })

    cy.get('@group-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
        'View and edit'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

When('the user sets the user group access level to view only', () => {
    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: groupViewAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: groupViewAccess,
    })

    cy.get('@group-list-item')
        .find('[data-test="dhis2-uicore-singleselect"]')
        .click()

    cy.contains(
        '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
        'View only'
    )
        .should('be.visible')
        .click()

    // Menu should be closed before continuing
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'not.exist'
    )
})

/**
 * the <target> access control should be set to <changed>
 */

Then('the all users access control should be set to view only', () => {
    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')
})

Then('the all users access control should be set to view and edit', () => {
    cy.get('@all-users-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Then('the user access control should be set to view and edit', () => {
    cy.get('@user-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Then('the group access control should be set to view and edit', () => {
    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Then('the user group access control should remain as View and edit', () => {
    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View and edit')
        .should('be.visible')
})

Then('the user group access control should be set to View only', () => {
    cy.get('@group-list-item')
        .contains('[data-test="dhis2-uicore-singleselect"]', 'View only')
        .should('be.visible')
})

/**
 * the <target> section should be labeled for <changed>
 */

Then('the all users section should be labeled for all users', () => {
    cy.get('@all-users-list-item')
        .contains('.details-text', 'Anyone logged in')
        .should('be.visible')
})

Then('the user section should be labeled for user', () => {
    cy.get('@user-list-item')
        .contains('.details-text', 'user-1')
        .should('be.visible')
})

Then('the group section should be labeled for group', () => {
    cy.get('@group-list-item')
        .contains('.details-text', 'User group')
        .should('be.visible')
})
