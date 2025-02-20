import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('contains the user name', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('[data-test="headerbar-profile-username"]')
    ).then(([win, $name]) => {
        console.log('win.dataProviderData', win.dataProviderData)
        const { name } = win.dataProviderData.me
        expect($name.text()).to.contain(name)
    })
})

Then('contains the user username', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('[data-test="headerbar-profile-user-subtitle"]')
    ).then(([win, $username]) => {
        const { username } = win.dataProviderData.me
        expect($username.text()).to.equal(username)
    })
})
