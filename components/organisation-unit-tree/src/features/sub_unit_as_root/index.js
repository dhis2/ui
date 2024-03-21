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

Given('both a sub org unit and a main org unit are root org units', () => {
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

Given('the root sub org unit is a child of the root main org unit', () => {
    cy.visitStory(
        'OrganisationUnitTree',
        'multiple root sub and one main org unit'
    )
})

Given('the user provided one root sub org unit to the filter', () => {
    cy.get('input[type="input"]').clear().type('/A0000000001')
})

Given('the user provided one non-root sub org unit to the filter', () => {
    cy.get('input[type="input"]').clear().type('/A0000000000/A0000000006')
})

When('the user selects sub org unit in the main org unit tree', () => {
    cy.contains('label', 'Org Unit 1').click()
    cy.get('[data-test="dhis2-uiwidgets-orgunittree-node-content"]')
        .contains('label', 'Org Unit 2')
        .click()
})

When('the user selects the root sub org unit', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').click()
})

Then(
    'all root sub org units but the filtered sub org unit should be hidden',
    () => {
        cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').should('exist')
        cy.contains(rootOrgUnitLabelSelector, 'Org Unit 1').should('not.exist')
        cy.contains(rootOrgUnitLabelSelector, 'Org Unit 3').should('not.exist')
    }
)

Then('the root main org unit should be marked as indeterminate', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 1')
        .find('> .icon svg')
        .should('have.class', 'indeterminate')
})

Then('the root sub org unit should be selected', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2')
        .find('> .icon svg')
        .should('have.class', 'checked')
})

Then('only the root main org units should be visible', () => {
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 1').should('exist')
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 2').should('not.exist')
    cy.contains(rootOrgUnitLabelSelector, 'Org Unit 3').should('not.exist')
})
