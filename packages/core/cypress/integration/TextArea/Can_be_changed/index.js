import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a TextArea with onChange handler is rendered', () => {
    cy.visitStory('TextArea', 'With onChange')
})

When('the TextArea is filled with a character', () => {
    cy.get('[data-test="dhis2-uicore-textarea"]')
        .click()
        .type('a')
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledWith({
            value: 'a',
            name: 'textarea',
        })
    })
})
