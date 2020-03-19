const shouldNotBeASelectedOrgUnitNode = (subject, singleSelection) => {
    cy.wrap(subject, { log: false })
        .shouldBeAnOrgUnitNode()
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-label"]', {
            log: false,
        })
        .first()
        .then($label => {
            if (singleSelection) {
                cy.wrap($label)
                    .find('.checked', { log: false })
                    .should('not.exist')
            } else {
                cy.wrap($label)
                    .find('input', { log: false })
                    .should('have.prop', 'checked', false)
            }
        })

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldNotBeASelectedOrgUnitNode',
    { prevSubject: true },
    shouldNotBeASelectedOrgUnitNode
)
