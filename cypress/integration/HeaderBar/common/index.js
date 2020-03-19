import { Before, Given } from 'cypress-cucumber-preprocessor/steps'

/**
 * Will be executed before any `Given` statement,
 * so these can be overriden by using a different fixture, e. g:
 *
 * Given('foo bar baz', () => {
 *   cy.fixture('HeaderBar/systemInfoBarbaz').as('systemInfoFixture')
 * })
 *
 * or
 *
 * Given('foo bar baz', () => {
 *   cy.fixture('HeaderBar/systemInfo')
 *      then(response => ({
 *          ...response,
 *          foo: {
 *              ...response.foo,
 *              bar: 'baz'
 *          }
 *      })).as('systemInfoFixture')
 * })
 *
 */
Before(() => {
    cy.fixture('HeaderBar/systemInfo').as('systemInfoFixture')
    cy.fixture('HeaderBar/me').as('meFixture')
    cy.fixture('HeaderBar/getModules').as('modulesFixture')
    cy.fixture('HeaderBar/dashboard').as('dashboardFixture')
    cy.fixture('HeaderBar/logo_banner').as('logoFixture')
})

Given('the HeaderBar loads without an error', () => {
    cy.server()

    cy.get('@systemInfoFixture').then(fx => {
        cy.route({
            url: 'https://domain.tld/api/system/info',
            response: fx,
        }).as('systemInfo')
    })

    cy.get('@meFixture').then(fx => {
        cy.route({
            url: 'https://domain.tld/api/me',
            response: fx,
        }).as('systemInfo')
    })

    cy.get('@modulesFixture').then(fx => {
        cy.route({
            url: 'https://domain.tld/dhis-web-commons/menu/getModules.action',
            response: fx,
        }).as('modules')
    })

    cy.get('@dashboardFixture').then(fx => {
        cy.route({
            url: 'https://domain.tld/api/me/dashboard',
            response: fx,
        }).as('dashboard')
    })

    cy.get('@logoFixture').then(fx => {
        cy.route({
            url: 'https://domain.tld/api/staticContent/logo_banner',
            response: fx,
        }).as('logo_banner')
    })

    cy.visitStory('HeaderBarTesting', 'Default')
})
