import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const rootOrgUnitLabelSelector = `
    [data-test="dhis2-uiwidgets-orgunittree"]
    > [data-test="dhis2-uiwidgets-orgunittree-node"]
    > [data-test="dhis2-uiwidgets-orgunittree-node-content"]
    > [data-test="dhis2-uiwidgets-orgunittree-node-label"]
    label
`

Given('a sub org unit is a root org unit', () => {
    cy.visitStory(
        'OrganisationUnitTree',
        'multiple root sub and one main org unit'
    )
})

Given('multiple sub org units is a root org unit', () => {
    cy.visitStory(
        'OrganisationUnitTree',
        'multiple root sub and one main org unit'
    )
})

Given('the user provided one root sub org unit to the filter', () => {
    cy.get('input[type="input"]').clear().type('/A0000000001')
})

Given('the user provided one non-root sub org unit to the filter', () => {
    cy.get('input[type="input"]').clear().type('/A0000000001/A0000000003')
})

When('the user selects the root sub org unit', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').click()
})

When('the user expands the root sub org unit', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2')
        .parents('[data-test="dhis2-uiwidgets-orgunittree-node"]')
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .click()
})

Then(
    'all root sub org units but the filtered sub org unit should be hidden',
    () => {
        cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').should('exist')
        cy.contains(rootOrgUnitLabelSelector, 'Org Unit 3').should('not.exist')
    }
)

Then('the root sub org unit should be selected', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2')
        .find('> .icon svg')
        .should('have.class', 'checked')
})

Then('only the root main org units should be visible', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').should('exist')
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 3').should('not.exist')
})

Then('only the matching children should be visible', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').should('exist')
    cy.contains(
        '[data-test="dhis2-uiwidgets-orgunittree-node-label"]',
        'Org Unit 4'
    ).should('exist')
    cy.contains(
        '[data-test="dhis2-uiwidgets-orgunittree-node-label"]',
        'Org Unit 5'
    ).should('not.exist')
})
