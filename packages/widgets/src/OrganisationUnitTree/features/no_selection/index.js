import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a disabled, collapsed OrganisationUnitTree with two levels is rendered',
    () => {
        cy.visitStory('OrganisationUnitTree', 'No selection closed')
    }
)

Given(
    'a disabled OrganisationUnitTree with two levels is rendered with the second level is expanded',
    () => {
        cy.visitStory('OrganisationUnitTree', 'No selection root opened')
    }
)

When('the root node is clicked', () => {
    cy.getOrgUnitByLabel('Org Unit 1')
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-label"]')
        .first()
        .trigger('click')
})

Then('the root node remains unselected', () => {
    cy.getOrgUnitByLabel('Org Unit 1')
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-label"]')
        .first()
        .as('rootLabel')
        .find('.checked')
        .should('not.exist')

    cy.get('@rootLabel')
        .find('input')
        .should('not.exist')
})

Then('the second level is expanded', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAnOpenNode()
})

Then('the second level is collapsed', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAClosedNode()
})
