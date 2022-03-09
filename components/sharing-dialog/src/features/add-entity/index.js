import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import {
    noAccess,
    searchUser,
    searchGroup,
    userViewAccess,
    userViewEditAccess,
    groupViewAccess,
    groupViewEditAccess,
} from '../fixtures/index.js'

/**
 * a sharing dialog that allows adding entities is visible
 */

Given('a sharing dialog that allows adding user entities is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: noAccess,
    })

    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Give access to a user or group').should('be.visible')
})

Given('a sharing dialog that allows adding group entities is visible', () => {
    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: noAccess,
    })

    cy.visitStory('sharing-dialog', 'visualization')
    cy.contains('Give access to a user or group').should('be.visible')
})

/**
 * the user gives <target> <level> access
 */

When('the user gives user view only access', () => {
    cy.intercept('GET', '/api/38/sharing/search?key=A%20user', {
        body: searchUser,
    })
    cy.get('[placeholder="Search"]').type('A user')
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A user').click()

    cy.contains('Select a level').click()
    cy.contains(
        '[data-test="dhis2-uicore-singleselectoption"]',
        'View only'
    ).click()

    cy.intercept('PUT', '/api/38/sharing?type=visualization&id=id', (req) => {
        const expected = {
            object: userViewAccess.object,
        }
        expect(req.body).to.deep.equal(expected)
        req.reply({ statusCode: 200 })
    })

    cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
        body: userViewAccess,
    })
    cy.contains('button', 'Give access').click()
})

When('the user gives user view and edit access', () => {
    cy.intercept('GET', '/api/38/sharing/search?key=A%20user', {
        body: searchUser,
    })
    cy.get('[placeholder="Search"]').type('A user')
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A user').click()

    cy.contains('Select a level').click()
    cy.contains(
        '[data-test="dhis2-uicore-singleselectoption"]',
        'View and edit'
    ).click()

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
    cy.contains('button', 'Give access').click()
})

When('the user gives group view only access', () => {
    cy.intercept('GET', '/api/38/sharing/search?key=A%20group', {
        body: searchGroup,
    })
    cy.get('[placeholder="Search"]').type('A group')
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A group').click()

    cy.contains('Select a level').click()
    cy.contains(
        '[data-test="dhis2-uicore-singleselectoption"]',
        'View only'
    ).click()

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
    cy.contains('button', 'Give access').click()
})

When('the user gives group view and edit access', () => {
    cy.intercept('GET', '/api/38/sharing/search?key=A%20group', {
        body: searchGroup,
    })
    cy.get('[placeholder="Search"]').type('A group')
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A group').click()

    cy.contains('Select a level').click()
    cy.contains(
        '[data-test="dhis2-uicore-singleselectoption"]',
        'View and edit'
    ).click()

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
    cy.contains('button', 'Give access').click()
})

/**
 * the <target> should be added to the access list with <level> access
 */

Then(
    'the user should be added to the access list with view only access',
    () => {
        cy.contains('.wrapper', 'A user').should('be.visible').as('user-item')

        cy.get('@user-item').contains('Can view').should('be.visible')
        cy.get('@user-item').contains('View only').should('be.visible')
    }
)

Then(
    'the user should be added to the access list with view and edit access',
    () => {
        cy.contains('.wrapper', 'A user').should('be.visible').as('user-item')

        cy.get('@user-item').contains('Can view and edit').should('be.visible')
        cy.get('@user-item').contains('View and edit').should('be.visible')
    }
)

Then(
    'the group should be added to the access list with view only access',
    () => {
        cy.contains('.wrapper', 'A group').should('be.visible').as('group-item')

        cy.get('@group-item').contains('Can view').should('be.visible')
        cy.get('@group-item').contains('View only').should('be.visible')
    }
)

Then(
    'the group should be added to the access list with view and edit access',
    () => {
        cy.contains('.wrapper', 'A group').should('be.visible').as('group-item')

        cy.get('@group-item').contains('Can view and edit').should('be.visible')
        cy.get('@group-item').contains('View and edit').should('be.visible')
    }
)

Then('the autocomplete input should be cleared', () => {
    cy.get('form input').invoke('val').should('be.empty')
})
