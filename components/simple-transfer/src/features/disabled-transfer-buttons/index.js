import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the options list has items', () => {
    cy.visitStory(
        'SimpleTransfer Disabled SimpleTransfer Buttons',
        'Has Options'
    )
})

Given('the selected list has items', () => {
    cy.visitStory(
        'SimpleTransfer Disabled SimpleTransfer Buttons',
        'Some Options Selected'
    )
})

Given('the transfer does not have any options', () => {
    cy.visitStory(
        'SimpleTransfer Disabled SimpleTransfer Buttons',
        'No Options'
    )
})

Given('all options have been selected', () => {
    cy.visitStory(
        'SimpleTransfer Disabled SimpleTransfer Buttons',
        'All Options Selected'
    )
})

Given('the selected list does not have items', () => {
    cy.visitStory(
        'SimpleTransfer Disabled SimpleTransfer Buttons',
        'Has Options'
    )
})

Given('no option items are highlighted', () => {
    cy.get('[data-test="dhis2-uicore-simple-transfer-sourceoptions"]')
        .find('option:selected')
        .should('have.length', 0)
})

Given('some option items are highlighted', () => {
    cy.get('[data-test="dhis2-uicore-simple-transfer-sourceoptions"]').select([
        0,
    ])
})

Given('no selected items are highlighted', () => {
    cy.get('[data-test="dhis2-uicore-simple-transfer-pickedoptions"]')
        .find('option:selected')
        .should('have.length', 0)
})

Given('some selected items are highlighted', () => {
    cy.get('[data-test="dhis2-uicore-simple-transfer-pickedoptions"]').select([
        0,
    ])
})

Given('a source list that has only disabled options', () => {
    cy.visitStory(
        'SimpleTransfer Disabled SimpleTransfer Buttons',
        'Only Disabled Source Options'
    )
})

Then("the 'move to picked list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-addindividual"][disabled]'
    ).should('exist')
})

Then("the 'move to picked list' button should be enabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-addindividual"]'
    ).should('exist')
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-addindividual"][disabled]'
    ).should('not.exist')
})

Then("the 'move to source list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-removeindividual"][disabled]'
    ).should('exist')
})

Then("the 'move to source list' button should be enabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-removeindividual"]'
    ).should('exist')
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-removeindividual"][disabled]'
    ).should('not.exist')
})

Then("the 'move all to picked list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-addall"][disabled]'
    ).should('exist')
})

Then("the 'move all to picked list' button should be enabled", () => {
    cy.get('[data-test="dhis2-uicore-simple-transfer-actions-addall"]').should(
        'exist'
    )
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-addall"][disabled]'
    ).should('not.exist')
})

Then("the 'move all to source list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-removeall"][disabled]'
    ).should('exist')
})

Then("the 'move all to source list' button should be enabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-removeall"]'
    ).should('exist')
    cy.get(
        '[data-test="dhis2-uicore-simple-transfer-actions-removeall"][disabled]'
    ).should('not.exist')
})
