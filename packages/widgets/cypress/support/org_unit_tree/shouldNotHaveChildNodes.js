const shouldNotHaveChildNodes = subject => {
    cy.wrap(subject, { log: false })
        .shouldBeAnOrgUnitNode()
        .find('[data-test="dhis2-uiwidgets-orgunittree-node"]', { log: false })
        .should('not.exist')

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldNotHaveChildNodes',
    { prevSubject: true },
    shouldNotHaveChildNodes
)
