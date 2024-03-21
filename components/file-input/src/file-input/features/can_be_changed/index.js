require('../common/index.js')
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FileInput with onChange handler is rendered', () => {
    cy.visitStory('FileInput', 'With onChange')
})

When('a file is selected', () => {
    cy.get('[data-test="dhis2-uicore-fileinput"] input').uploadSingleFile(
        '.md',
        'FileInput/file.md'
    )
})

Then("the onChange handler's payload contains the file", () => {
    cy.window().should((win) => {
        const calls = win.onChange.getCalls()
        const callArgs = calls[0].args
        const payload = callArgs[0]
        const files = payload.files

        expect(files).to.have.lengthOf(1)

        const file1 = files[0]
        expect(file1.name).to.equal('file.md')
    })
})
