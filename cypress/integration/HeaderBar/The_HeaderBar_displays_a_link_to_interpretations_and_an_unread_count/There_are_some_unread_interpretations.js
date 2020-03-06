import '../common/index'
import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given('there are 10 unread interpretations', () => {
    cy.fixture('HeaderBar/dashboard')
        .then(response => ({
            ...response,
            unreadInterpretations: 10,
        }))
        .as('dashboardFixture')
})

Then('the interpretations link contains an icon with the number 10', () => {
    cy.get('[data-test="headerbar-interpretations-count"]').then($count => {
        expect($count.text()).to.equal('10')
    })
})
