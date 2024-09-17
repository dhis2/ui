import { When } from '@badeball/cypress-cucumber-preprocessor'

When('the user clicks on the Switch', () => {
    cy.get('[data-test="dhis2-uicore-switch"]').click()
})
