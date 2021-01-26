import { Before, Given } from 'cypress-cucumber-preprocessor/steps'

export const baseUrl = 'https://domain.tld/'
export const webCommons = 'https://domain.tld/dhis-web-commons/'

Before(() => {
    cy.fixture('HeaderBar/applicationTitle').as('applicationTitleFixture')
    cy.fixture('HeaderBar/helpLink').as('helpLinkFixture')
    cy.fixture('HeaderBar/me').as('meFixture')
    cy.fixture('HeaderBar/meWithAvatar').as('meWithAvatarFixture')
    cy.fixture('HeaderBar/getModules').as('modulesFixture')
    cy.fixture('HeaderBar/dashboard').as('dashboardFixture')
    cy.fixture('HeaderBar/logo_banner').as('logoFixture')
    cy.server()

    cy.get('@applicationTitleFixture').then(fx => {
        cy.route({
            url: `${baseUrl}/api/systemSettings/applicationTitle`,
            response: fx,
        }).as('applicationTitle')
    })

    cy.get('@helpLinkFixture').then(fx => {
        cy.route({
            url: `${baseUrl}/api/systemSettings/helpLink`,
            response: fx,
        }).as('helpLink')
    })

    cy.get('@meFixture').then(fx => {
        cy.route({
            url: `${baseUrl}/api/me?fields=authorities,avatar,email,name,settings`,
            response: fx,
        }).as('me')
    })

    cy.get('@modulesFixture').then(fx => {
        cy.route({
            url: `${baseUrl}/dhis-web-commons/menu/getModules.action`,
            response: fx,
        }).as('modules')
    })

    cy.get('@dashboardFixture').then(fx => {
        cy.route({
            url: `${baseUrl}/api/me/dashboard`,
            response: fx,
        }).as('dashboard')
    })

    cy.get('@logoFixture').then(fx => {
        cy.route({
            url: `${baseUrl}/api/staticContent/logo_banner`,
            response: fx,
        }).as('logo_banner')
    })

    cy.intercept('GET', `${baseUrl}api/fileResources/avatarId/data`, {
        fixture: 'HeaderBar/avatar.png',
    }).as('avatar')
})

Given('the HeaderBar loads without an error', () => {
    cy.visitStory('HeaderBarTesting', 'Default')
})
