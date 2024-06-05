import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('the remove handle behind a file is clicked', () => {
    cy.contains('test1.md')
        .siblings('[data-test="dhis2-uicore-filelistitem-remove"]')
        .click()
})

Then(
    "the onChange handler's payload does not contain an entry for that file",
    () => {
        cy.window().should((win) => {
            const calls = win.onChange.getCalls()
            const callArgs = calls[0].args

            const payload = callArgs[0]
            const files = payload.files
            expect(files).to.have.lengthOf(2)

            const filtered = files.filter((file) => file.name === 'test1.md')
            expect(filtered).to.have.lengthOf(0)
        })
    }
)
