import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../common/index'

const meUrl = `${baseUrl}/api/me?fields=authorities,avatar,email,name,settings`

Given('the user has the ALL authority', () => {
    cy.fixture('HeaderBar/me').then(fx => {
        cy.route({
            url: meUrl,
            response: {
                ...fx,
                authorities: ['ALL'],
            },
        })
    })
})

Given(
    'the user has the M_dhis-web-interpretation and M_dhis-web-messaging authority',
    () => {
        cy.fixture('HeaderBar/me').then(fx => {
            cy.route({
                url: meUrl,
                response: {
                    ...fx,
                    authorities: [
                        'M_dhis-web-interpretation',
                        'M_dhis-web-messaging',
                    ],
                },
            })
        })
    }
)

Given('the user has the M_dhis-web-interpretation authority', () => {
    cy.fixture('HeaderBar/me').then(fx => {
        cy.route({
            url: meUrl,
            response: {
                ...fx,
                authorities: ['M_dhis-web-interpretation'],
            },
        })
    })
})

Given('the user has the M_dhis-web-messaging authority', () => {
    cy.fixture('HeaderBar/me').then(fx => {
        cy.route({
            url: meUrl,
            response: {
                ...fx,
                authorities: ['M_dhis-web-messaging'],
            },
        })
    })
})

Given('the user has authority for none of the apps', () => {
    cy.fixture('HeaderBar/me').then(fx => {
        cy.route({
            url: meUrl,
            response: {
                ...fx,
                authorities: [],
            },
        })
    })
})

Then('the messaging app icon is not rendered', () => {
    cy.get('[data-test="headerbar-messages"]').should('not.exist')
})

Then('the messaging app icon is rendered', () => {
    cy.get('[data-test="headerbar-messages"]').should('exist')
})

Then('the interpretations app icon is not rendered', () => {
    cy.get('[data-test="headerbar-interpretations"]').should('not.exist')
})

Then('the interpretations app icon is rendered', () => {
    cy.get('[data-test="headerbar-interpretations"]').should('exist')
})
