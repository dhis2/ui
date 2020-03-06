import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    "loading errors do not display automatically and loading A0000000001's children will fail",
    () => {
        cy.visitStory('OrganisationUnitTree', 'A0000000001 loading error')
    }
)

Given(
    "loading errors display automatically and loading A0000000001's children will fail",
    () => {
        cy.visitStory(
            'OrganisationUnitTree',
            'A0000000001 loading error autoexpand'
        )
    }
)

Given('the OrganisationUnitTree is closed', () => {
    cy.get(
        '[data-test="dhis2-uiwidgets-orgunittree"] > [data-test="dhis2-uiwidgets-orgunittree-node"]'
    )
        .as('rootNode')
        .shouldBeAClosedNode()
})

When('the A0000000000 path is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 1').openOrgUnitNode()
})

When('the A0000000000 -> A0000000001 path is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 2').openOrgUnitNode()
})

Then('no error message is shown', () => {
    cy.getOrgUnitByLabel('Org Unit 2')
        .find('[data-test="dhis2-uiwidgets-orgunittree-error"]')
        .should('not.exist')
})

Then('an appropriate error message is shown', () => {
    cy.getOrgUnitByLabel('Org Unit 2')
        .find('[data-test="dhis2-uiwidgets-orgunittree-error"]')
        .should('contain', 'Could not load children')
})
