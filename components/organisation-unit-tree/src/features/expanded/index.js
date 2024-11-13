import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

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
        cy.visitStory('OrganisationUnitTree', 'No initially expanded paths')
    }
)

Given(
    'a OrganisationUnitTree with children and the path of the first unit on the second level in the initiallyExpanded prop is rendered',
    () => {
        cy.visitStory('OrganisationUnitTree', 'Initially expanded paths')
    }
)

Given('both a sub org unit and its parent are root org units', () => {
    cy.visitStory(
        'OrganisationUnitTree',
        'with root main and root sub org unit'
    )
})

Given('the root main org unit is expanded', () => {
    getRootOrgUnitByLabel('Org Unit 1')
        .find('> [data-test="dhis2-uiwidgets-orgunittree-node-toggle"]')
        .click()
})

Then('the root unit is closed', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAClosedNode()
})

Then('the root unit is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeAnOrgUnitNode()
})

Then('only the parent unit is first rendered', () => {
    cy.contains(
        '[data-test="dhis2-uiwidgets-orgunittree-node-label"]',
        'Org Unit 1'
    ).should('exist')

    cy.contains(
        '[data-test="dhis2-uiwidgets-orgunittree-node-label"]',
        'Org Unit 2'
    ).should('not.exist')
})

Then('the sub org unit is rendered', () => {
    cy.contains(
        '[data-test="dhis2-uiwidgets-orgunittree-node-label"]',
        'Org Unit 2'
    ).should('exist')
})
