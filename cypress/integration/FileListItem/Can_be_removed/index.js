import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileListItem with Onremove handler is rendered', () => {
    cy.visitStory('FileListItem', 'With onRemove')
})

When('the user clicks on the remove text', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem-remove"]').click()
})

Then('the onRemove handler is called', () => {
    cy.window().then(win => {
        expect(win.onRemove).to.be.calledWith({})
    })
})
