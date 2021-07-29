import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Modal contains a tooltip', () => {
    cy.visitStory('Tooltip', 'Modal With Tooltip')
})

Then('the Tooltip has attached itself to the modal layer root node', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-layer"]'),
        () => cy.get('[data-test="dhis2-uicore-popper"]')
    ).should(([$layer, $popper]) => {
        expect($popper.get(0).parentNode).to.equal($layer.get(0))
    })
})

Then('the Tooltip is fully visible', () => {
    cy.get('[data-test="dhis2-uicore-popper"]').should('be.visible')
})
