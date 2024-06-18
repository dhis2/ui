import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an FileInput with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('FileInput', 'With initial focus and on blur')
})

When('the FileInput is blurred', () => {
    cy.focused()
    cy.get('[data-test="dhis2-uicore-fileinput"] button').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().then((win) => {
        cy.get('[data-test="dhis2-uicore-fileinput"] input').should(
            (fileInput) => {
                expect(win.onBlur).to.be.calledWith({
                    name: 'upload',
                    files: fileInput[0].files,
                })
            }
        )
    })
})
