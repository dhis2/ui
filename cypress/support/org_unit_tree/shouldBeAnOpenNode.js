const shouldBeAnOpenNode = subject => {
    cy.wrap(subject, { log: false })
        .shouldBeAnOrgUnitNode()
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-toggle"]', {
            log: false,
        })
        .should('have.class', 'open')

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldBeAnOpenNode',
    { prevSubject: true },
    shouldBeAnOpenNode
)
