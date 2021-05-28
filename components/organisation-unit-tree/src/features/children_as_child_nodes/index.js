import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an OrganisationUnitTree with children is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Closed with children')
})

Given('the node is open', () => {
    cy.get(
        '[data-test="dhis2-uiwidgets-orgunittree"] > [data-test="dhis2-uiwidgets-orgunittree-node"]'
    ).as('rootUnit')

    cy.get('@rootUnit').openOrgUnitNode()
})

Then("its children are nodes inside the unit's node", () => {
    cy.get('@rootUnit')
        .find(
            '> [data-test="dhis2-uiwidgets-orgunittree-node-content"] > [data-test="dhis2-uiwidgets-orgunittree-node-leaves"]'
        )
        .children()
        .then(children => console.log('children', children) || children)
        .should('have.length', 3)
        .and(children =>
            children.each((_, child) => {
                const $child = Cypress.$(child)
                const dataTest = $child.data('test')
                expect(dataTest).to.equal('dhis2-uiwidgets-orgunittree-node')
            })
        )
})
