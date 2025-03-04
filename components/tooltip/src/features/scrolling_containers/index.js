import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { getReferenceAndContentPositions } from '../common/getReferenceAndContentPositions.js'

/**
 * Note that scrolling behavior is tricky with cypress:
 * https://github.com/cypress-io/cypress/issues/2353#issuecomment-740384177
 *
 * These tests work, but the snapshots don't look right: the anchor element
 * positions are not as they seem, but the _mouse cursor_ and _tooltip_
 * positions in the snapshots are truthful.
 */

// Test 1
Given(
    'a reference element in a scrolling container with enough space between the top of the reference element and the container top to fit the Tooltip, and there is enough space above the container for a tooltip',
    () => {
        cy.visitStory('Tooltip', 'Scrolling Containers')
    }
)

When('the mouse cursor enters the anchor without scrolling', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-reference"]').trigger(
        'mouseover',
        'top',
        { scrollBehavior: false }
    )
})

// Test 2
When(
    'the container is scrolled such that the reference element is still visible but tooltip in its default position would leave the container boundaries',
    () => {
        cy.get('[data-test="hiding-and-flipping-container"]').scrollTo(0, 250)
    }
)

When(
    'the mouse cursor enters the bottom of the anchor without scrolling',
    () => {
        cy.get('[data-test="dhis2-uicore-tooltip-reference"]').trigger(
            'mouseover',
            'bottom',
            { scrollBehavior: false }
        )
    }
)

// Test 3
Given('this test uses timers', () => {
    cy.clock()
})

When('there is a pause to allow the tooltip to open', () => {
    cy.tick(250)
})

When(
    'the container is scrolled such that the reference element is not visible',
    () => {
        cy.get('[data-test="hiding-and-flipping-container"]').scrollTo(0, 320)
    }
)

When('the mouse cursor leaves the anchor without scrolling', () => {
    // 'mouseOut' is triggered automatically after scrolling in the real thing
    // Also, don't need to move the mouse because the element has moved
    cy.get('[data-test="dhis2-uicore-tooltip-reference"]').trigger('mouseout', {
        // Cypress will normally not trigger events when the element is hidden
        force: true,
        scrollBehavior: false,
    })
})

Then('the Tooltip still exists but is hidden', () => {
    // Note that no time has passed since mouseOut since `cy.clock()` is used
    cy.get('[data-test="dhis2-uicore-tooltip-content"]')
        .should('exist')
        .should('not.be.visible')
})

When('enough time passes for the CLOSE_DELAY to complete', () => {
    cy.clock()
    cy.tick(500)
})

Then('the Tooltip is rendered below the anchor', () => {
    getReferenceAndContentPositions().should(([refPos, contentPos]) => {
        expect(contentPos.top).to.be.greaterThan(refPos.bottom)
    })
})

Then('the Tooltip is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-content"]').should('not.exist')
})
