export function getReferenceAndContentPositions() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-tooltip-reference"]',
        '[data-test="dhis2-uicore-tooltip-content"]'
    )
}
