import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const getRootOrgUnitByLabel = (label) => {
    const rootOrgUnitLabelSelector = `
        [data-test="dhis2-uiwidgets-orgunittree"]
        > [data-test="dhis2-uiwidgets-orgunittree-node"]
        > [data-test="dhis2-uiwidgets-orgunittree-node-content"]
        > [data-test="dhis2-uiwidgets-orgunittree-node-label"]
        label
    `

    return cy
        .contains(rootOrgUnitLabelSelector, label)
        .parents('[data-test="dhis2-uiwidgets-orgunittree-node"]')
}

Given(
    'a OrganisationUnitTree with children and no paths in the initiallyExpanded prop is rendered',
    () => {
        cy.visitStory(
            'OrganisationUnitTree',
            'No initially expanded paths'
        )
    }
)

Given(
    'a OrganisationUnitTree with children and the path of the first unit on the second level in the initiallyExpanded prop is rendered',
    () => {
        cy.visitStory(
            'OrganisationUnitTree',
            'Initially expanded paths'
        )
    }
)

Given(
    'both a sub org unit with children and a main org unit are root org units',
    () => {
        cy.visitStory(
            'OrganisationUnitTree',
            'with root main and root sub org unit'
        )
    }
)

Given('the root main org unit is expanded', () => {
    getRootOrgUnitByLabel('Org Unit 1')
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .click()
})

When('the user expands the sub org unit within the main org unit tree', () => {
    getRootOrgUnitByLabel('Org Unit 1')
        .contains(
            '[data-test="dhis2-uiwidgets-orgunittree-node"]',
            'Org Unit 2'
        )
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .click()
        .should('have.class', 'open')
})

When('the user expands the root sub org unit', () => {
    getRootOrgUnitByLabel('Org Unit 2')
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .click()
        .should('have.class', 'open')
})

Then('the root unit is closed', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAClosedNode()
})

Then('the root unit is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAnOrgUnitNode()
})

Then('the root sub org unit should not expand', () => {
    getRootOrgUnitByLabel('Org Unit 2')
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .should('not.have.class', 'open')
})

Then('the sub org unit within the main org unit tree should not expand', () => {
    getRootOrgUnitByLabel('Org Unit 1')
        .contains(
            '[data-test="dhis2-uiwidgets-orgunittree-node"]',
            'Org Unit 2'
        )
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .should('not.have.class', 'open')
})
