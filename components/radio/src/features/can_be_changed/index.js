import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Radio with onChange handler is rendered', () => {
    cy.visitStory('Radio', 'With on change')
})

When('the Radio is checked', () => {
    cy.get('[data-test="dhis2-uicore-radio"]').click()
})

Then('the onChange handler is called', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
