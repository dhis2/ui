import { When } from 'cypress-cucumber-preprocessor/steps'

When('the user clicks on the Switch', () => {
    cy.get('[data-test="dhis2-uicore-switch"]').click()
})
