import { hexStringToByte } from './uploadFile/hexStringToByte.js'

/**
 * @param {string} fileType
 * @param {string} fixture
 * @param {string} selector
 */
function uploadSingleFile(subject, fileType, fixture) {
    return cy
        .fixture(fixture, 'hex')
        .then(fileHex => {
            const fileBytes = hexStringToByte(fileHex)
            const fileName = fixture.replace(/.+\//g, '')
            const testFile = new File([fileBytes], fileName, {
                type: fileType,
            })
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(testFile)

            return dataTransfer.files
        })
        .then(files => {
            cy.wrap(subject).as('element')
            cy.get('@element').then($el => ($el[0].files = files))
            cy.get('@element').trigger('change', { force: true })
            return cy
        })
}

Cypress.Commands.add(
    'uploadSingleFile',
    { prevSubject: true },
    uploadSingleFile
)
