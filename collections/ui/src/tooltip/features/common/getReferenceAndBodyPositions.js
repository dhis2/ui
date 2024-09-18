export function getReferenceAndBodyPositions() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-tooltip-reference"]',
        'body'
    )
}
