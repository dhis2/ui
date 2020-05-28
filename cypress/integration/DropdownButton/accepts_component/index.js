import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a DropdownButton with a component prop and opened dropdown is rendered',
    () => {
        cy.visitStory('DropdownButton', 'With component')

        cy.get('[data-test="dhis2-uicore-dropdownbutton"]').should('be.visible')
        cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
        cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should(
            'exist'
        )
    }
)

Then('the component is visible', () => {
    cy.contains('I am a component').should('be.visible')
})
