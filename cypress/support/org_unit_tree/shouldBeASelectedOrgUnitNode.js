const shouldBeASelectedOrgUnitNode = (subject, singleSelection = false) => {
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
                    .should('exist')
            } else {
                cy.wrap($label)
                    .find('input', { log: false })
                    .should('have.prop', 'checked', true)
            }
        })

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldBeASelectedOrgUnitNode',
    { prevSubject: true },
    shouldBeASelectedOrgUnitNode
)
