const shouldHaveChildNodes = subject => {
    cy.wrap(subject, { log: false })
        .shouldBeAnOrgUnitNode()
        .find('[data-test="dhis2-uiwidgets-orgunittree-node"]', { log: false })
        .should('exist')

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldHaveChildNodes',
    { prevSubject: true },
    shouldHaveChildNodes
)
