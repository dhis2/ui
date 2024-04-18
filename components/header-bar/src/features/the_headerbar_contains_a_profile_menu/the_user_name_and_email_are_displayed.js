import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains the user name', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('[data-test="headerbar-profile-username"]')
    ).then(([win, $name]) => {
        console.log('win.dataProviderData', win.dataProviderData)
        const { name } = win.dataProviderData.me
        expect($name.text()).to.equal(name)
    })
})

Then('contains the user email', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('[data-test="headerbar-profile-user-email"]')
    ).then(([win, $email]) => {
        const { email } = win.dataProviderData.me
        expect($email.text()).to.equal(email)
    })
})
