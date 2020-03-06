import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an OrganisationUnitTree with two nodes is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Single selection')
})

Given('no unit is selected', () => {
    cy.get('.checked').should('not.exist')
})

Given('the first unit has been selected', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(true, true)
})

When('the user selects the first unit', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(true, true)
})

When('the user selects the second unit', () => {
    cy.getOrgUnitByLabel('Org Unit 2').toggleOrgUnitNodeSelection(true, true)
})

When('the user deselects the first unit', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(false, true)
})

Then('the first unit is selected', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeASelectedOrgUnitNode(true)
})

Then('the first unit is not selected', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldNotBeASelectedOrgUnitNode(true)
})

Then('the second unit is selected', () => {
    cy.getOrgUnitByLabel('Org Unit 2').shouldBeASelectedOrgUnitNode(true)
})

Then('no unit is selected', () => {
    cy.get('[data-test="dhis2-uiwidgets-orgunittree-node"]').then($nodes => {
        $nodes.each((index, node) => {
            cy.wrap(Cypress.$(node)).shouldNotBeASelectedOrgUnitNode()
        })
    })
})
