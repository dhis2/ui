import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Radio with onChange handler is rendered', () => {
    cy.visitStory('Radio', 'With onChange')
})

When('the Radio is checked', () => {
    cy.get('[data-test="dhis2-uicore-radio"]').click()
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
