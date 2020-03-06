const toggleOrgUnitNodeSelection = (
    subject,
    select = true,
    singleSelection = false
) => {
    cy.wrap(subject, { log: false })
        .as('toggleOrgUnitNode__node')
        .shouldBeAnOrgUnitNode()

    if (select) {
        cy.get('@toggleOrgUnitNode__node', {
            log: false,
        }).shouldNotBeASelectedOrgUnitNode(singleSelection)
    } else {
        cy.get('@toggleOrgUnitNode__node', {
            log: false,
        }).shouldBeASelectedOrgUnitNode(singleSelection)
    }

    cy.get('@toggleOrgUnitNode__node', { log: false })
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-label"]', {
            log: false,
        })
        .first()
        .click()

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'toggleOrgUnitNodeSelection',
    { prevSubject: true },
    toggleOrgUnitNodeSelection
)
