function selectSelectNthOption(subject, index, closeMenu = false) {
    cy.wrap(subject)
        .find('label + div > .root > .root-input')
        .click()
    cy.get(`.backdrop > div > div > div > div:nth-child(${index})`).click()

    if (closeMenu) {
        cy.get('.backdrop').click('topRight') // close menu
    }
}

Cypress.Commands.add(
    'selectSelectNthOption',
    { prevSubject: true },
    selectSelectNthOption
)
