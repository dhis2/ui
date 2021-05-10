import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a OrganisationUnitTree with children and no paths in the initiallyExpanded prop is rendered',
    () => {
        cy.visitStory('OrganisationUnitTree', 'No initially expanded paths')
    }
)

Given(
    'a OrganisationUnitTree with children and the path of the first unit on the second level in the initiallyExpanded prop is rendered',
    () => {
        cy.visitStory('OrganisationUnitTree', 'Initially expanded paths')
    }
)

Then('the root unit is closed', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAClosedNode()
})

Then('the root unit is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAnOrgUnitNode()
})
