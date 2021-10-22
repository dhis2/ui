import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given('the custom title is "Barbaz" and the app title is "Example!"', () => {
    cy.visitStory('HeaderBarTesting', 'Custom Application Title')
})

Then('the displayed title should be "Barbaz - Example!"', () => {
    cy.get('[data-test="headerbar-title"]').should(($title) => {
        expect($title.text()).to.equal('Barbaz - Example!')
    })
})
