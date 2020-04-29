import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('reordering of items is enabled', () => {
    // no op
})

Given('the selected list has three items', () => {
    cy.visitStory('Transfer Reorder Buttons', 'Has Some Selected')
})

Given('the selected list has some items', () => {
    cy.visitStory('Transfer Reorder Buttons', 'Has Some Selected')
})

Given('the {int}. item is highlighted', previousPisition => {
    const index = previousPisition - 1

    cy.get('{transfer-pickedoptions} {transferoption}')
        .eq(index)
        .as('previous')
        .click()
})

Given('no items are highlighted in the list', () => {
    cy.get('{transfer-pickedoptions} {transferoption}').should('not.exist')
})

Given('more than one item is highlighted in the list', () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        .filter(index => index < 2)
        .each($option => cy.wrap($option).clickWith('ctrl'))
})

When("the user clicks the 'move up' button", () => {
    // force, so we click disabled buttons
    cy.get('{transfer-reorderingactions-buttonmoveup}').click({ force: true })
})

When("the user clicks the 'move down' button", () => {
    // force, so we click disabled buttons
    cy.get('{transfer-reorderingactions-buttonmovedown}').click({ force: true })
})

Then('the highlighted item should be moved to the {int}. place', next => {
    const index = next - 1
    cy.get('@previous')
        .invoke('index')
        .should('equal', index)
})

Then("the 'move up' and 'move down' buttons should be disabled", () => {
    cy.get('{transfer-reorderingactions-buttonmoveup}').should(
        'have.attr',
        'disabled'
    )
    cy.get('{transfer-reorderingactions-buttonmovedown}').should(
        'have.attr',
        'disabled'
    )
})
