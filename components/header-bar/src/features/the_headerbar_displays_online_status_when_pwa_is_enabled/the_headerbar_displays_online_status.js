import {
    Before,
    After,
    Given,
    Then,
    And,
} from 'cypress-cucumber-preprocessor/steps'
import '../common/index'

// https://www.cypress.io/blog/2020/11/12/testing-application-in-offline-network-mode/
const goOffline = () => {
    cy.log('**go offline**')
        .then(() => {
            return Cypress.automation('remote:debugger:protocol', {
                command: 'Network.enable',
            })
        })
        .then(() => {
            return Cypress.automation('remote:debugger:protocol', {
                command: 'Network.emulateNetworkConditions',
                params: {
                    offline: true,
                    latency: -1,
                    downloadThroughput: -1,
                    uploadThroughput: -1,
                },
            })
        })
}
const goOnline = () => {
    // disable offline mode, otherwise we will break our tests :)
    cy.log('**go online**')
        .then(() => {
            // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
            return Cypress.automation('remote:debugger:protocol', {
                command: 'Network.emulateNetworkConditions',
                params: {
                    offline: false,
                    latency: -1,
                    downloadThroughput: -1,
                    uploadThroughput: -1,
                },
            })
        })
        .then(() => {
            return Cypress.automation('remote:debugger:protocol', {
                command: 'Network.disable',
            })
        })
}

Before(() => goOnline())
After(() => goOnline())

Given('the HeaderBar loads without error when PWA is enabled', () => {
    cy.visitStory('HeaderBarTesting', 'PWA Enabled')
})

And('the viewport is narrower than 480px', () => {
    cy.viewport(460, 660)
})

Then('the HeaderBar displays only the desktop status badge', () => {
    // This assumes default viewport size: 1000x660
    cy.get('[data-test="headerbar-online-status"].badge').should('be.visible')
    cy.get('[data-test="headerbar-online-status"].bar').should('not.be.visible')
})

And('the status badge shows online', () => {
    cy.get('[data-test="headerbar-online-status"].badge .label').should(
        $label => {
            expect($label.text()).to.equal('Online')
        }
    )
    cy.get('[data-test="headerbar-online-status"].badge .icon').should(
        $icon => {
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

And('the browser goes offline', () => {
    goOffline()
})

Then('the status badge shows offline', () => {
    cy.get('[data-test="headerbar-online-status"].badge .label').should(
        $label => {
            expect($label.text()).to.equal('Offline')
        }
    )
    cy.get('[data-test="headerbar-online-status"].badge .icon').should(
        $icon => {
            expect($icon).to.have.class('offline')
        }
    )
})
