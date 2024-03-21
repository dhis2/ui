require('../common/index.js')
import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('the mouse cursor leaves the anchor', () => {
    // Trigger the mouseout event, and make sure the mouse is
    // actually out of the reference element rect
    cy.get('[data-test="dhis2-uicore-tooltip-reference"]').trigger('mouseout', {
        clientX: 800,
        clientY: 800,
    })
})

Then('the Tooltip is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-content"]').should('not.exist')
})

When('there is a short pauze', () => {
    cy.clock()
    // Shorter than the components CLOSE_DELAY
    cy.tick(300)
})
