const shouldBeAnOrgUnitNode = subject => {
    expect(subject).to.match('[data-test="dhis2-uiwidgets-orgunittree-node"]')

    return cy.wrap(subject, { log: false })
}

Cypress.Commands.add(
    'shouldBeAnOrgUnitNode',
    { prevSubject: true },
    shouldBeAnOrgUnitNode
)
