import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

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
    cy.get('@payload').then(payload => {
        const files = payload.files
        expect(files).to.have.lengthOf(1)

        const file1 = files[0]
        expect(file1.name).to.equal('file.md')
    })
})
