import '../common/index'
import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given('there are 5 unread messages', () => {
    cy.fixture('HeaderBar/dashboard')
        .then(response => ({
            ...response,
            unreadMessages: 5,
        }))
        .as('dashboardFixture')
})

Then('the messages link contains an icon with the number 5', () => {
    cy.get('[data-test="headerbar-messages-count"]').then($count => {
        expect($count.text()).to.equal('5')
    })
})
