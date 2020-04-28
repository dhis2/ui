import '../common/index.js'
import '../../common/submit.js'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('a file with the wrong file type is provided', () => {
    cy.get('[name="fileTxt"]').uploadSingleFile('md', 'FileInput/file.md')
})

Then('an error message is shown', () => {
    cy.get('.fileTxt')
        .get('[data-test="dhis2-uicore-fileinputfield-validation"]')
        .should(
            'contain',
            'The file you provided is not a txt file, received "md"'
        )
})
