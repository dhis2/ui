import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FileInputFieldWithList without multiple is rendered', () => {
    cy.visitStory('FileInputFieldWithList', 'Single file - with file')
})

Given('the FileInputFieldWithList holds a file', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem"]').should('have.lengthOf', 1)
})

Then('the button is disabled', () => {
    cy.get('[data-test="dhis2-uicore-button"]').should('have.attr', 'disabled')
})
