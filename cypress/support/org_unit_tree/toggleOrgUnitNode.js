const toggleOrgUnitNode = (subject, toggle = true) => {
    cy.wrap(subject, { log: false })
        .as('toggleOrgUnitNode__node')
        .shouldBeAnOrgUnitNode()

    if (toggle) {
        cy.get('@toggleOrgUnitNode__node', { log: false }).shouldBeAClosedNode()
    } else {
        cy.get('@toggleOrgUnitNode__node', { log: false }).shouldBeAnOpenNode(
            true
        )
    }

    cy.get('@toggleOrgUnitNode__node', { log: false })
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-toggle"]', {
            log: false,
        })
        .first()
        .click()

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'toggleOrgUnitNode',
    { prevSubject: true },
    toggleOrgUnitNode
)
