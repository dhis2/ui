import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const enabledSourceOptionSelector =
    '{simple-transfer-sourceoptions} {transferoption}:not(.disabled)'

const disabledSourceOptionSelector =
    '{simple-transfer-sourceoptions} {transferoption}.disabled'

Given('a source list that contains a disabled option', () => {
    cy.visitStory('SimpleTransfer Disabled Source Options', 'One Disabled')
    cy.get(disabledSourceOptionSelector)
        .first()
        .as('disabledSourceOption')
        .should('exist')
})

Given(
    'a source list that contains at least one disabled option and at least one enabled option',
    () => {
        cy.visitStory('SimpleTransfer Disabled Source Options', 'One Disabled')
        cy.get(disabledSourceOptionSelector)
            .first()
            .as('disabledSourceOption')
            .should('exist')
        cy.get(enabledSourceOptionSelector)
            .as('enabledSourceOptions')
            .should('exist')
    }
)

Given(
    'a source list that contains at least one disabled option and at least one enabled highlighted option',
    () => {
        cy.visitStory('SimpleTransfer Disabled Source Options', 'One Disabled')
        cy.get(disabledSourceOptionSelector)
            .first()
            .as('disabledSourceOption')
            .should('exist')

        cy.get(enabledSourceOptionSelector).then(($options) => {
            const values = $options
                .slice(0, 2)
                .map((index, option) => option.value)
                .get()
            cy.wrap(values).as('enabledHighlightedSourceOptions')
            cy.get('{simple-transfer-sourceoptions}').select(values)
        })
    }
)

Given(
    'a source list that contains at least one disabled option and several enabled options',
    () => {
        cy.visitStory('SimpleTransfer Disabled Source Options', 'One Disabled')
        cy.get(disabledSourceOptionSelector)
            .first()
            .as('disabledSourceOption')
            .should('exist')
        cy.get(enabledSourceOptionSelector)
            .as('enabledSourceOptions')
            .should('have.length.of.at.least', 2)
    }
)

When("the user clicks the 'move all to picked list' button", () => {
    cy.get('{simple-transfer-actions-addall}').click()
})

Then('the disabled option is not transferred to the picked list', () => {
    // if the aliased element still exists, it hasn't been removed
    // from the source list. Transferring does not need to be tested
    // here as that's covered by another test
    cy.get('@disabledSourceOption').should('exist')
})

Then('the disabled options are not transferred to the picked list', () => {
    // if the aliased element still exists, it hasn't been removed
    // from the source list. Transferring does not need to be tested
    // here as that's covered by another test
    cy.get('@disabledSourceOption').should('exist')
})

Then('the enabled options are transferred to the picked list', () => {
    // if the aliased elements don't exist, it hasn't been removed
    // from the source list. Transferring does not need to be tested
    // here as that's covered by another test
    cy.get('@enabledSourceOptions').should('not.exist')
})
