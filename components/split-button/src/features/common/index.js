import { When } from 'cypress-cucumber-preprocessor/steps'

When('the SplitButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-button"]').click()
})

When('the SplitButton toggle is clicked', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-toggle"]').click()
})
