const openOrgUnitNode = subject =>
    cy
        .wrap(subject, { log: false })
        .shouldBeAClosedNode()
        .toggleOrgUnitNode()
        .shouldBeAnOpenNode()

Cypress.Commands.add('openOrgUnitNode', { prevSubject: true }, openOrgUnitNode)
