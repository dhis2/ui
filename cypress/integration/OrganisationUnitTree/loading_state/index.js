import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a OrganisationUnitTree with two levels is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'A0000000001 loading')
})

Given('the root level is closed', () => {
    cy.getOrgUnitByLabel('Org Unit 1')
        .as('rootUnit')
        .shouldBeAClosedNode()
})

When('the root level is opened', () => {
    cy.get('@rootUnit').openOrgUnitNode()
})

Then(
    'there is a loading indicator rendered on the first child of the second level',
    () => {
        cy.getOrgUnitByLabel('Org Unit 2')
            .find('[data-test="dhis2-uicore-circularloader"]')
            .should('exist')

        cy.getOrgUnitByLabel('Org Unit 2')
            .find('[data-test="dhis2-uiwidgets-orgunittree-node-leaves"]:empty')
            .should('exist')
    }
)
