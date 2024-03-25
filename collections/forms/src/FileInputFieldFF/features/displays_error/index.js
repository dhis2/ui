require('../common/index.js')
import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('a file with the wrong file type is provided', () => {
    cy.get('[name="fileTxt"]').uploadSingleFile('md', 'FileInput/file.md')
})

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})

Then('an error message is shown', () => {
    cy.get('.fileTxt')
        .get('[data-test="dhis2-uiwidgets-fileinputfield-validation"]')
        .should(
            'contain',
            'The file you provided is not a txt file, received "md"'
        )
})
