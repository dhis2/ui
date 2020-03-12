import '../common/index.js'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('a file with the wrong file type is provided', () => {
    cy.get('[name="fileTxt"]').uploadSingleFile('md', 'FileInput/file.md')
})

Then('an error message is shown', () => {
    cy.get('.fileTxt .error').should(
        'contain',
        'The file you provided is not a txt file, received "md"'
    )
})
