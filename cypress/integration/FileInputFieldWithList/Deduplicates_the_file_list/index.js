import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the list contains the file duplicate.md', () => {
    cy.contains('duplicate.md')
        .should('have.lengthOf', 1)
        .should('have.class', 'label')
        .closest('[data-test="dhis2-uicore-filelistitem"]')
        .should('have.lengthOf', 1)
})

When('the file duplicate.md is selected', () => {
    cy.window().then(win => {
        cy.get('[data-test="dhis2-uicore-fileinput"] input').then($input => {
            // name, lastModified, size and type are equal to the file created in the story
            const duplicate = new File(...win.duplicateFileConstructorArgs)
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(duplicate)
            $input[0].files = dataTransfer.files
            cy.get($input).trigger('change', { force: true })
        })
    })
})

Then(
    "the onChange handler's payload contains a single entry for file.md",
    () => {
        cy.get('@payload').then(payload => {
            const files = payload.files
            expect(files).to.have.lengthOf(3)

            const filesWithNameFileMd = files.filter(
                f => f.name === 'duplicate.md'
            )
            expect(filesWithNameFileMd).to.have.lengthOf(1)
        })
    }
)
