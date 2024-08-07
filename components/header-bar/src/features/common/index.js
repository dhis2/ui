import { Before, Given } from '@badeball/cypress-cucumber-preprocessor'

export const baseUrl = 'https://domain.tld/'
export const webCommons = 'https://domain.tld/dhis-web-commons/'

Before(() => {
    cy.intercept('GET', `${baseUrl}api/fileResources/avatarId/data`, {
        fixture: 'HeaderBar/avatar.png',
    }).as('avatar')
})

Given('the HeaderBar loads without an error', () => {
    cy.visitStory('HeaderBarTesting', 'Default')
})
