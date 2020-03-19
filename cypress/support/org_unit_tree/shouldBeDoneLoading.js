const shouldBeDoneLoading = subject => {
    cy.wrap(subject, { log: false }).find(
        '> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]'
    )

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldBeDoneLoading',
    { prevSubject: true },
    shouldBeDoneLoading
)
