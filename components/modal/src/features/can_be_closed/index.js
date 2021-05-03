import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a top-aligned Modal with onClose handler is rendered', () => {
    cy.visitStory('Modal', 'With onClose')
})

When('the Screencover is clicked above the modal', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click('top')
})

Then('the onClose handler is called', () => {
    cy.window().should(win => {
        expect(win.onClose).to.be.calledWith({})
    })
})

Given('a bottom-aligned Modal with onClose handler is rendered', () => {
    cy.visitStory('Modal', 'Bottom-aligned, with onClose')
})

When('the Screencover is clicked below the modal', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click('bottom')
})
