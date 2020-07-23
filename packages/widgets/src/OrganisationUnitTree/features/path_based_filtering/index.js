import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
    cy.wrap([]).as('displayedUnits')
})

const addDisplayedUnit = id => {
    cy.get('@displayedUnits').then(displayedUnits => {
        cy.wrap([...displayedUnits, id]).as('displayedUnits')
    })
}

Given(
    'a unfiltered OrganisationUnitTree with a depth of 3 levels is rendered',
    () => {
        cy.visitStory('OrganisationUnitTree', 'Filtered by 3-level-path')
    }
)

Given(
    'a filtered OrganisationUnitTree with a depth of 3 levels is rendered',
    () => {
        cy.visitStory(
            'OrganisationUnitTree',
            'Filtered by 3-level-path and 2-level-path'
        )
    }
)

/**
 * left empty intentionally
 * ========================
 * Step is necessary to make the feature file understandable
 * Required states are prepared by the story
 */
Given('the second level contains two nodes', () => {})
Given('all parent levels are open', () => {})
Given(
    'a filter containing the first child of the first second level is provided',
    () => {}
)
Given('the second level nodes each have a child node', () => {})
Given(
    'a filter containing the first child of the second level is provided',
    () => {}
)
Given(
    'a filter containing the second child of the first level is provided',
    () => {}
)

Then('the root level is visible', () => {
    cy.getOrgUnitByLabel('Org Unit 1').should('exist')

    addDisplayedUnit('A0000000000')
})

Then('the first node on the second level is visible', () => {
    cy.getOrgUnitByLabel('Org Unit 2').should('exist')

    addDisplayedUnit('A0000000001')
})

Then(
    'the first child node of the first node on the second level is visible',
    () => {
        cy.getOrgUnitByLabel('Org Unit 4').should('exist')

        addDisplayedUnit('A0000000003')
    }
)

Then('the second node on the first level is visible', () => {
    cy.getOrgUnitByLabel('Org Unit 3').should('exist')

    addDisplayedUnit('A0000000002')
})

Then('all other nodes are not rendered', async () => {
    cy.get('@displayedUnits').then(displayedUnits => {
        cy.window().then(win => {
            const excludedUnitNumbers = Object.keys(win.dataProviderData)
                .map(key => key.replace('organisationUnits/', ''))
                .filter(unit => !displayedUnits.includes(unit))
                .map(id => parseInt(id.replace(/^.*(\d)$/, '$1'), 10) + 1)

            excludedUnitNumbers.forEach(number => {
                const label = `Org Unit ${number}`
                cy.get(
                    `[data-test="dhis2-uiwidgets-orgunittree-node-label"]:contains("${label}")`
                ).should('not.exist')
            })
        })
    })
})
