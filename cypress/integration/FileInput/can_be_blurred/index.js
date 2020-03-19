import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an FileInput with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('FileInput', 'With initialFocus and onBlur')
})

When('the FileInput is blurred', () => {
    cy.get('[data-test="dhis2-uicore-fileinput"] button').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        cy.get('[data-test="dhis2-uicore-fileinput"] input').then(fileInput => {
            expect(win.onBlur).to.be.calledWith({
                name: 'upload',
                files: fileInput[0].files,
            })
        })
    })
})
