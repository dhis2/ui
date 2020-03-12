import { hexStringToByte } from './uploadFile/hexStringToByte.js'

/**
 * @param {Array.<{ fileType: string, fixture: string }>} files
 * @param {string} selector
 */
function uploadMultipleFiles(subject, files, trigger) {
    const dataTransfer = new DataTransfer()

    cy.wrap(subject).as('element')

    files
        .reduce((cyp, { fileType, fixture }) => {
            cy.fixture(fixture, 'hex').then(fileHex => {
                const fileBytes = hexStringToByte(fileHex)
                const fileName = fixture.replace(/.+\//g, '')
                const testFile = new File([fileBytes], fileName, {
                    type: fileType,
                })

                dataTransfer.items.add(testFile)
            })

            return cyp
        }, cy)
        .then(() => {
            cy.get('@element').then($el => ($el[0].files = dataTransfer.files))
            // for some reasons trigger causes the `.files` prop to be empty.
            // Only trigger when wanting to inspect the event
            trigger && cy.get('@element').trigger('change', { force: true })
        })
}

Cypress.Commands.add(
    'uploadMultipleFiles',
    { prevSubject: true },
    uploadMultipleFiles
)
