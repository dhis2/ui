import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a multi-file IputField is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
})

When('a file is provided', () => {
    cy.get('[name="fileTxt"]').uploadSingleFile('txt', 'FileInput/file.txt')
})

When('more than one files are provided', () => {
    cy.get('[name="fileJpgs"]').uploadMultipleFiles(
        [
            { fileType: 'txt', fixture: 'FileInput/file.txt' },
            { fileType: 'md', fixture: 'FileInput/file.md' },
        ],
        true
    )
})

Then('the form state contains that file', () => {
    cy.window().then(win => {
        const { fileTxt } = win.formValues
        expect(fileTxt).to.have.lengthOf(1)

        const [file] = fileTxt
        expect(file.name).to.equal('file.txt')
    })
})

Then('the form state contains those files', () => {
    cy.window().then(win => {
        const { fileJpgs } = win.formValues
        expect(fileJpgs).to.have.lengthOf(2)

        const [file1, file2] = fileJpgs
        expect(file1.name).to.equal('file.txt')
        expect(file2.name).to.equal('file.md')
    })
})
