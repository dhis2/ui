import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('reordering of items is enabled', () => {
    // no op
})

Given('the selected list has three items', () => {
    cy.visitStory('Transfer Reorder Buttons', 'Has Some Selected')
})

Given('the selected list has some items', () => {
    cy.visitStory('Transfer Reorder Buttons', 'Has Some Selected')
})

Given('the {int}. item is highlighted', (previousPosition) => {
    const index = previousPosition - 1
    console.log('> index', index)

    cy.get('{transfer-pickedoptions} {transferoption}')
        .eq(index)
        .invoke('attr', 'data-value')
        // For some reason, using `.as()` directly doesn't work.
        // Wrapping it inside a `.then` works though
        .then((previousValue) => cy.wrap(previousValue).as('previousValue'))

    cy.get('{transfer-pickedoptions} {transferoption}')
        .eq(index)
        .as('previous')
        .click()
})

Given('no items are highlighted in the list', () => {
    cy.get('{transfer-pickedoptions} {transferoption}.highlighted').should(
        'not.exist'
    )
})

Given('more than one item is highlighted in the list', () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        .filter((index) => index < 2)
        .each(($option) => cy.wrap($option).clickWith('ctrl'))
})

When("the user clicks the 'move up' button", () => {
    // force, so we click disabled buttons
    cy.get('{transfer-reorderingactions-buttonmoveup}').click({ force: true })
})

When("the user clicks the 'move down' button", () => {
    // force, so we click disabled buttons
    cy.get('{transfer-reorderingactions-buttonmovedown}').click({ force: true })
})

Then('the highlighted item should be moved to the {int}. place', (next) => {
    const index = next - 1

    cy.get('@previousValue')
        .then((previousValue) => cy.get(`[data-value="${previousValue}"]`))
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
