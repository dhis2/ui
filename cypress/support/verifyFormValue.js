Cypress.Commands.add('verifyFormValue', (fieldName, expectedValue) => {
    cy.getFormValue(fieldName).then(actualValue => {
        expect(actualValue).to.equal(expectedValue)
    })
})

Cypress.Commands.add('verifyFormArrayValue', (fieldName, expectedValue) => {
    cy.getFormValue(fieldName).then(actualValue => {
        expect(actualValue).to.contain(expectedValue)
    })
})
