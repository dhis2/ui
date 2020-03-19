import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Switch with onChange handler is rendered', () => {
    cy.visitStory('Switch', 'With onChange')
})

When('the Switch is clicked', () => {
    cy.get('[data-test="dhis2-uicore-switch"]').click()
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
