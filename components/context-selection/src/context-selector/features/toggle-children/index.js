import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the context selector is closed', () => {
    cy.visitStory('ContextSelector', 'closed no value')
})

Given('the context selector is open', () => {
    cy.visitStory('ContextSelector', 'open no value')
})

When('the user opens the context selector', () => {
    cy.contains('Context selector', { selector: 'button' }).click()
})

When('the user closes the context selector', () => {
    cy.get('body').click('topLeft')
})

Then('the children should be displayed', () => {
    cy.get('[data-test="dhis2-uiwidgets-singleselectfield"]').should('exist')
})

Then('the children should not be displayed', () => {
    cy.get('[data-test="dhis2-uiwidgets-singleselectfield"]').should(
        'not.exist'
    )
})
