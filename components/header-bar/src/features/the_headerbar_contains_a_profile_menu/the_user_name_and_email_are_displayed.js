import '../common/index.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('contains the user name', () => {
    cy.getAll('@meFixture', '[data-test="headerbar-profile-username"]').should(
        ([{ name }, $name]) => {
            expect($name.text()).to.equal(name)
        }
    )
})

Then('contains the user email', () => {
    cy.getAll(
        '@meFixture',
        '[data-test="headerbar-profile-user-email"]'
    ).should(([{ email }, $email]) => {
        expect($email.text()).to.equal(email)
    })
})
