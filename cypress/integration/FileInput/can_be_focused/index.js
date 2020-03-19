import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileInput with onFocus handler is rendered', () => {
    cy.visitStory('FileInput', 'With onFocus')
})

When('the FileInput is focused', () => {
    cy.get('[data-test="dhis2-uicore-fileinput"] button').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        cy.get('[data-test="dhis2-uicore-fileinput"] input').then(fileInput => {
            expect(win.onFocus).to.be.calledWith({
                name: 'upload',
                files: fileInput[0].files,
            })
        })
    })
})
