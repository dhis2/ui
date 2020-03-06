import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem with onClick handler and value is rendered', () => {
    cy.visitStory('MenuItem', 'With onClick and value')
})

When('the MenuItem is clicked', () => {
    cy.get('[data-test="dhis2-uicore-menuitem"]').click()
})

Then('the onClick handler is called with value', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({
            value: 'Value',
        })
    })
})
