Cypress.Commands.add('verifyFormValue', (fieldName, expectedValue) => {
    cy.getFormValue(fieldName).then(actualValue => {
        expect(actualValue).to.equal(expectedValue)
    })
})
