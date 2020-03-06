import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Chip with onRemove handler is rendered', () => {
    cy.visitStory('Chip', 'With onRemove')
})

When('the remove icon is clicked', () => {
    cy.get('[data-test="dhis2-uicore-chip-remove"]').click()
})

Then('the onRemove handler is called', () => {
    cy.window().then(win => {
        expect(win.onRemove).to.be.calledWith({})
    })
})
