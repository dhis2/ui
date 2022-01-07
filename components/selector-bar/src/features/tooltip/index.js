import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a selector bar item with no tooltip content is rendered', () => {
    cy.visitStory('Selector Bar', 'Without Tooltip')
    cy.get('.selector-bar-item').as('selectorBarItem')
})

Given('a selector bar item with tooltip content is rendered', () => {
    cy.visitStory('Selector Bar', 'With Tooltip')
})

Given('the user hovers the selector bar item', () => {
    cy.get('@selectorBarItem').trigger('mouseover')
})

/**
 * cypress-cucumber-preprocessor does not differentiate between "Given", "When"
 * and "Then". This step has been implemented as "Given" already
 */
// When('the user hovers that item', () => {
//
// })

When('the user stops hovering that item', () => {
    cy.get('@selectorBarItem').trigger('mouseout')
})

Then('a tooltip should be disappear', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-content"]').should('not.exist')
})

Then('a tooltip should be displayed', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-content"]').should('exist')
})

Then('no tooltip should be displayed', () => {
    cy.get('[data-test="dhis2-uicore-tooltip-content"]').should('not.exist')
})
