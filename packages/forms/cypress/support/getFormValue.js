Cypress.Commands.add('getFormValue', fieldName => {
    // make sure form spy function ran
    cy.get('.form-spy-internal')

    return cy.window().then(win => {
        // unlike in vanilla js, instead of returning
        // the next value, in cypress we have to wrap
        // the value
        cy.wrap(win.formValues[fieldName])
    })
})
