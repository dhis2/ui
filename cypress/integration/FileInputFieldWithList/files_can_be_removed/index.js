import '../common'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('the remove handle behind a file is clicked', () => {
    cy.contains('test1.md')
        .siblings('[data-test="dhis2-uicore-filelistitem-remove"]')
        .click()
})

Then(
    "the onChange handler's payload does not contain an entry for that file",
    () => {
        cy.get('@payload')
            .its('files')
            .should('have.lengthOf', 2)
            .then(files => files.filter(f => f.name === 'test1.md'))
            .should('have.lengthOf', 0)
    }
)
