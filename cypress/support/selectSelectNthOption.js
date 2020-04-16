function selectSelectNthOption(subject, index, closeMenu = false) {
    cy.wrap(subject)
        .find('label + div > .root > .root-input')
        .click()
    cy.get(`.layer > div > div > div > div:nth-child(${index})`).click()

    if (closeMenu) {
        cy.get('.layer').click('topRight') // close menu
    }
}

Cypress.Commands.add(
    'selectSelectNthOption',
    { prevSubject: true },
    selectSelectNthOption
)
