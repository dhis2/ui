const shouldBeAClosedNode = subject => {
    cy.wrap(subject, { log: false })
        .shouldBeAnOrgUnitNode()
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-leaves"]', {
            log: false,
        })
        .children({ log: false })
        .then(child => {
            expect(
                child.is('[data-test="dhis2-uiwidgets-orgunittree-node"]')
            ).to.equal(false)
        })

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldBeAClosedNode',
    { prevSubject: true },
    shouldBeAClosedNode
)
