import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a loading FileListItem with onCancel handler is rendered', () => {
    cy.visitStory('FileListItem', 'Loading with onCancel')
})

When('the user clicks on the cancel text', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem-cancel"]').click()
})

Then('the onCancel handler is called', () => {
    cy.window().should((win) => {
        expect(win.onCancel).to.be.calledWith({})
    })
})
