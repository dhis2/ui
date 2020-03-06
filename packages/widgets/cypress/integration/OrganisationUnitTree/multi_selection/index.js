import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an OrganisationUnitTree with two levels is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Multiple selection')
})

Given('no unit is selected', () => {
    cy.window().then(win => {
        expect(win.selection).to.eql([])
    })
})

Given('the root level unit is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 1').openOrgUnitNode(true)
})

Given('the first unit on the second level is selected', () => {
    cy.getOrgUnitByLabel('Org Unit 2').toggleOrgUnitNodeSelection(true)
})

Given('the first unit on the second level unit is opened', () => {
    cy.getOrgUnitByLabel('Org Unit 2').openOrgUnitNode(true)
})

Given('the second level has two units', () => {
    cy.getOrgUnitByLabel('Org Unit 2')
        .find('[data-test="dhis2-uiwidgets-orgunittree-node-leaves"]')
        .first()
        .children()
        .filter((index, child) =>
            Cypress.$(child).is(
                '[data-test="dhis2-uiwidgets-orgunittree-node"]'
            )
        )
        .should('have.length', 2)
})

When('the user selects a unit', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(true)
})

When('the user selects the first unit on the second level', () => {
    cy.getOrgUnitByLabel('Org Unit 2').toggleOrgUnitNodeSelection(true)
})

When('the user selects the root level', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(true)
})

When('the user selects the second unit on the second level', () => {
    cy.getOrgUnitByLabel('Org Unit 3').toggleOrgUnitNodeSelection(true)
})

Then('a unit is selected', () => {
    cy.window().then(win => {
        expect(win.selection).to.eql(['/A0000000000'])
    })
})

Then('the unit on the second level is selected', () => {
    cy.window().then(win => {
        expect(win.selection).to.eql(['/A0000000000/A0000000001'])
    })
})

Then('the unit on the first level is marked as selected intermediately', () => {
    cy.getOrgUnitByLabel('Org Unit 1')
        .find(
            '[data-test="dhis2-uiwidgets-orgunittree-node-label"] [data-test="dhis2-uicore-checkbox"] input'
        )
        .then($input => {
            expect($input[0].indeterminate).to.be.true
        })
})

Then('the root unit is marked as selected', () => {
    cy.window().then(win => {
        expect(win.selection.includes('/A0000000000')).to.be.true
    })
})

Then('the first unit is selected', () => {
    cy.window().then(win => {
        expect(win.selection.includes('/A0000000000/A0000000001')).to.be.true
        expect(win.selection).to.have.length(2)
    })
})

Then('the second unit is selected', () => {
    cy.window().then(win => {
        expect(win.selection.includes('/A0000000000/A0000000002')).to.be.true
        expect(win.selection).to.have.length(2)
    })
})
