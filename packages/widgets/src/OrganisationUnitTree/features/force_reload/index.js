import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a OrganisationUnitTree with three levels is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Force reloading')
})

Given('the two parent levels are opened', () => {
    cy.getOrgUnitByLabel('Org Unit 1')
        .as('rootNode')
        .openOrgUnitNode()

    cy.getOrgUnitByLabel('Org Unit 2').openOrgUnitNode()

    cy.get('@rootNode')
        .find(
            '[data-test="dhis2-uiwidgets-orgunittree-node"] [data-test="dhis2-uiwidgets-orgunittree-node"]'
        )
        .should('exist')
})

When(
    'the tree is being force reloaded and the loading process has finished',
    () => {
        cy.get('[data-test="reload-all"]').click()
    }
)

Then('all three levels are visible again', () => {
    cy.get('@rootNode')
        .find('[data-test="dhis2-uiwidgets-orgunittree-node"]')
        .should('exist')

    cy.get('@rootNode')
        .find(
            '[data-test="dhis2-uiwidgets-orgunittree-node"] [data-test="dhis2-uiwidgets-orgunittree-node"]'
        )
        .should('exist')
})
