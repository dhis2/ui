import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FileList with children is rendered', () => {
    cy.visitStory('FileList', 'With children')
    cy.get('[data-test="dhis2-uicore-filelist"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
