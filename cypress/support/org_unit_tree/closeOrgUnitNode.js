const closeOrgUnitNode = subject =>
    cy
        .wrap(subject, { log: false })
        .shouldBeAnOpenNode()
        .toggleOrgUnitNode(false)
        .shouldBeAClosedNode()

Cypress.Commands.add(
    'closeOrgUnitNode',
    { prevSubject: true },
    closeOrgUnitNode
)
