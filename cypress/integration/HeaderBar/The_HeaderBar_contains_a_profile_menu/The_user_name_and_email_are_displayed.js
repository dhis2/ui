import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains the user name', () => {
    cy.get('@meFixture').then(({ name }) => {
        cy.get('[data-test="headerbar-profile-username"]').then($name => {
            expect($name.text()).to.equal(name)
        })
    })
})

Then('contains the user email', () => {
    cy.get('@meFixture').then(({ email }) => {
        cy.get('[data-test="headerbar-profile-user-email"]').then($email => {
            expect($email.text()).to.equal(email)
        })
    })
})
