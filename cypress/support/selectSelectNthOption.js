function selectSelectNthOption(subject, index, closeMenu = false) {
    cy.wrap(subject).click()
    cy.get('[data-test="dhis2-uicore-singleselectoption"]')
        .eq(index)
        .click()

    if (closeMenu) {
        cy.get('.layer').click('topRight') // close menu
    }
}

Cypress.Commands.add(
    'selectSelectNthOption',
    { prevSubject: true },
    selectSelectNthOption
)
