import {
    Before,
    After,
    Given,
    Then,
    When,
} from '@badeball/cypress-cucumber-preprocessor'
require('../common/index.js')

// see https://github.com/cypress-io/cypress/issues/17723#issuecomment-1457064322
const goOffline = () => {
    cy.log('**go offline**')
        // stub every request with a StaticResponse to simulate network error
        .then(() => cy.intercept('*', { forceNetworkError: true }))
        .then(() =>
            cy.window().then((win) => win.dispatchEvent(new Event('offline')))
        )
}
const goOnline = () => {
    // disable offline mode, otherwise we will break our tests :)
    cy.log('**go online**')
        // go back to normal network behavior
        .then(() => cy.intercept('*'))
        .then(() =>
            cy.window().then((win) => win.dispatchEvent(new Event('online')))
        )
}

Before(() => {
    goOnline()
})
After(() => goOnline())

Given(
    'the HeaderBar loads without error with showOnlineStatus configured',
    () => {
        cy.visitStory('HeaderBarTesting', 'Show Online Status')
    }
)

Given('the HeaderBar loads without error when PWA is enabled', () => {
    cy.visitStory('HeaderBarTesting', 'PWA Enabled')
})

Given(
    'the HeaderBar loads and is PWA enabled so online status messages will be visible',
    () => {
        cy.visitStory(
            'HeaderBarTesting',
            'Online Status Messaging With PWA Enabled'
        )
    }
)

Given('the viewport is narrower than 480px', () => {
    cy.viewport(460, 660)
})

Then('the HeaderBar does not render online status', () => {
    cy.get('[data-test="headerbar-online-status"]').should('not.exist')
})

Then('the HeaderBar renders online status', () => {
    cy.get('[data-test="headerbar-online-status"]').should('exist')
})

Then('the HeaderBar displays only the desktop status badge', () => {
    // This assumes default viewport size: 1000x660
    cy.get('[data-test="headerbar-online-status"].badge').should('be.visible')
    cy.get('[data-test="headerbar-online-status"].bar').should('not.be.visible')
})

Then('the status badge shows online', () => {
    cy.get('[data-test="headerbar-online-status"].badge .label').should(
        ($label) => {
            expect($label.text()).to.equal('Online')
        }
    )
    cy.get('[data-test="headerbar-online-status"].badge .icon').should(
        ($icon) => {
            expect($icon).to.have.class('online')
        }
    )
})

Then('the HeaderBar displays only the mobile status bar', () => {
    cy.get('[data-test="headerbar-online-status"].bar').should('be.visible')
    cy.get('[data-test="headerbar-online-status"].badge').should(
        'not.be.visible'
    )
})

Given('the browser goes offline', () => {
    goOffline()
})

Then('the status badge shows offline', () => {
    cy.get('[data-test="headerbar-online-status"].badge .label').should(
        ($label) => {
            expect($label.text()).to.equal('Offline')
        }
    )
    cy.get('[data-test="headerbar-online-status"].badge .icon').should(
        ($icon) => {
            expect($icon).to.have.class('offline')
        }
    )
})

Then('no online status message text is displayed', () => {
    cy.get('[data-test="headerbar-online-status"] .info').should('not.exist')
    cy.get('[data-test="headerbar-online-status"] .info-dense').should(
        'not.exist'
    )
})

When('an online status message is sent', () => {
    cy.get('button').contains('display online status message').click()
})

When('an online status message is removed', () => {
    cy.get('button').contains('remove online status message').click()
})

Then('an online status message is displayed', () => {
    cy.get('[data-test="headerbar-online-status"] .info').should(
        'include.text',
        '8 offline events'
    )
})

Then(
    'an online status message is displayed with formatting for small screens',
    () => {
        cy.get('[data-test="headerbar-online-status"] .info-dense').should(
            'include.text',
            '8 offline events'
        )
    }
)

Then('last online text is displayed in the status badge', () => {
    cy.get('[data-test="headerbar-online-status"].badge .info').should(
        'include.text',
        'Last online'
    )
})

Then('last online text is displayed in the mobile status bar', () => {
    cy.get('[data-test="headerbar-online-status"].bar .info-dense').should(
        'include.text',
        'Last online'
    )
})
