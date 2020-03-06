import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileList with children is rendered', () => {
    cy.visitStory('FileList', 'With children')
    cy.get('[data-test="dhis2-uicore-filelist"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
