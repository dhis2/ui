import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a OrganisationUnitTree with a highlighted root unit is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Root highlighted')
})

Then('root unit has the highlighted styles', () => {
    cy.getOrgUnitByLabel('Org Unit 1')
        .find('.highlighted')
        .should('exist')
})
