import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'there is enough space between the reference element top and the body top to fit the Tooltip',
    () => {
        cy.visitStory('Tooltip', 'Default')
    }
)

Given(
    'there is not enough space above or below the anchor to fit the Tooltip',
    () => {
        cy.visitStory('Tooltip', 'Shifting Position')
    }
)

When('the mouse cursor enters the anchor', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-reference"]').trigger(
        'mouseover',
        'top'
    )
})

Then('the Tooltip is rendered above the anchor', () => {
    cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-tooltip-reference"]',
        '[data-test="dhis2-uicore-tooltip-content"]'
    ).then(([refPos, contentPos]) => {
        expect(refPos.top).to.be.greaterThan(contentPos.bottom)
    })
})

Then('the Tooltip stays visible', () => {
    cy.clock()
    cy.tick(800)
    cy.get('[data-test="dhis2-uicore-tooltip-content"]').should('exist')
})

Then('the Tooltip is rendered on top of the anchor', () => {
    cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-tooltip-reference"]',
        '[data-test="dhis2-uicore-tooltip-content"]'
    ).then(([refPos, contentPos]) => {
        expect(contentPos.bottom).to.be.greaterThan(refPos.top)
        expect(refPos.top).to.be.greaterThan(contentPos.top)
    })
})
