import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps'

Given('a Select is hidden initially', () => {
    cy.visitStory('SingleSelectField', 'With hidden parent')
})

When('someone hovers over it to show it', () => {
    cy.get('.container .hiddenSelect').invoke('attr', 'style', 'display: block')
})

And('clicks the select', () => {
    cy.get('[data-test="dhis2-uicore-select"]').click()
})

Then('the select dropdown should be in the correct position', () => {
    cy.get('[data-test="hoverable-select-field"]').should('be.visible')
    cy.get('[data-test="dhis2-uicore-singleselectoption"]').should(
        ($selectField) => {
            const { top, left } = $selectField.offset()
            expect(top).to.be.greaterThan(0)
            expect(left).to.be.greaterThan(0)
        }
    )
})
