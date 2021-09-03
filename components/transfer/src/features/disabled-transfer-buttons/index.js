import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the options list has items', () => {
    cy.visitStory('Transfer Disabled Transfer Buttons', 'Has Options')
})

Given('the selected list has items', () => {
    cy.visitStory('Transfer Disabled Transfer Buttons', 'Some Options Selected')
})

Given('the transfer does not have any options', () => {
    cy.visitStory('Transfer Disabled Transfer Buttons', 'No Options')
})

Given('all options have been selected', () => {
    cy.visitStory('Transfer Disabled Transfer Buttons', 'All Options Selected')
})

Given('the selected list does not have items', () => {
    cy.visitStory('Transfer Disabled Transfer Buttons', 'Has Options')
})

Given('the selected list has items', () => {
    cy.visitStory('Transfer Disabled Transfer Buttons', 'Some Options Selected')
})

Given('no option items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-sourceoptions"] [data-test="dhis2-uicore-transferoption"]'
    ).each($option => cy.wrap($option).should('not.have.class', 'highlighted'))
})

Given('some option items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-sourceoptions"] [data-test="dhis2-uicore-transferoption"]'
    )
        .first()
        .click()
})

Given('no selected items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-pickedoptions"] [data-test="dhis2-uicore-transferoption"]'
    ).each($option => cy.wrap($option).should('not.have.class', 'highlighted'))
})

Given('some selected items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-pickedoptions"] [data-test="dhis2-uicore-transferoption"]'
    )
        .first()
        .click()
})

Given('a source list that has only disabled options', () => {
    cy.visitStory(
        'Transfer Disabled Transfer Buttons',
        'Only Disabled Source Options'
    )
})

Then("the 'move to picked list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-addindividual"][disabled]'
    ).should('exist')
})

Then("the 'move to picked list' button should be enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-actions-addindividual"]').should(
        'exist'
    )
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-addindividual"][disabled]'
    ).should('not.exist')
})

Then("the 'move to source list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-removeindividual"][disabled]'
    ).should('exist')
})

Then("the 'move to source list' button should be enabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-removeindividual"]'
    ).should('exist')
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-removeindividual"][disabled]'
    ).should('not.exist')
})

Then("the 'move all to picked list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-addall"][disabled]'
    ).should('exist')
})

Then("the 'move all to picked list' button should be enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-actions-addall"]').should('exist')
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-addall"][disabled]'
    ).should('not.exist')
})

Then("the 'move all to source list' button should be disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-removeall"][disabled]'
    ).should('exist')
})

Then("the 'move all to source list' button should be enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-actions-removeall"]').should(
        'exist'
    )
    cy.get(
        '[data-test="dhis2-uicore-transfer-actions-removeall"][disabled]'
    ).should('not.exist')
})
