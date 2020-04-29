import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { extractOptionFromElement } from '../common'

const enabledSourceOptionSelector =
    '{transfer-sourceoptions} {transferoption}:not(.disabled)'

const disabledSourceOptionSelector =
    '{transfer-sourceoptions} {transferoption}.disabled'

Given('a source list that contains a disabled option', () => {
    cy.visitStory('Disabled Source Options', 'One Disabled')
    cy.get(disabledSourceOptionSelector)
        .first()
        .as('disabledSourceOption')
        .should('exist')
})

Given(
    'a source list that contains at least one disabled option and at least one enabled option',
    () => {
        cy.visitStory('Disabled Source Options', 'One Disabled')
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
        cy.visitStory('Disabled Source Options', 'One Disabled')
        cy.get(disabledSourceOptionSelector)
            .first()
            .as('disabledSourceOption')
            .should('exist')
        cy.get(enabledSourceOptionSelector)
            .invoke('slice', 0, 2)
            .as('enabledHighlightedSourceOptions')
            .each($option => cy.wrap($option).click())
            .should('have.class', 'highlighted')
    }
)

Given(
    'a source list that contains at least one disabled option and several enabled options',
    () => {
        cy.visitStory('Disabled Source Options', 'One Disabled')
        cy.get(disabledSourceOptionSelector)
            .first()
            .as('disabledSourceOption')
            .should('exist')
        cy.get(enabledSourceOptionSelector)
            .as('enabledSourceOptions')
            .should('have.length.of.at.least', 2)
    }
)

When('the user clicks a disabled option', () => {
    cy.get(disabledSourceOptionSelector)
        .click()
        .as('clickedDisabledOption')
})

When('the user double clicks a disabled option', () => {
    cy.get(disabledSourceOptionSelector)
        .dblclick()
        .as('doubleClickedDisabledOption')
})

When("the user clicks the 'move all to picked list' button", () => {
    cy.get('{transfer-actions-addall}').click()
})

When('the user clicks the disabled item with {string}', type => {
    cy.get(disabledSourceOptionSelector)
        .clickWith(type)
        .as('clickedWithModifierDisabledOption')
})

When('the user SHIFT+clicks the disabled item', () => {
    cy.get(disabledSourceOptionSelector)
        .clickWith('shift')
        .as('clickedWithShiftDisabledOption')
})

When('the user clicks an enabled option', () => {
    cy.get(enabledSourceOptionSelector)
        .first()
        .click()
        .as('clickedEnabledOption')
})

When(
    'SHIFT+clicks another enabled option, including a disabled item in the range of options',
    () => {
        cy.get(disabledSourceOptionSelector)
            .next()
            .clickWith('shift')
            .as('clickedWithShiftEnabledOption')
    }
)

Then('the disabled option is not highlighted', () => {
    cy.get('@disabledSourceOption').should('not.have.class', 'highlighted')
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

Then('the previously highlighted items are still highlighted', () => {
    cy.get('@enabledHighlightedSourceOptions').should(
        'have.class',
        'highlighted'
    )
})

Then('only the previously highlighted items are highlighted', () => {
    cy.get('@enabledHighlightedSourceOptions').should(
        'have.class',
        'highlighted'
    )

    cy.all(
        () => cy.get('{transfer-sourceoptions} {transferoption}'),
        () => cy.get('@enabledHighlightedSourceOptions')
    ).then(([$sourceOptions, $previouslyHighlightedOptions]) => {
        const sourceOptions = $sourceOptions
            .toArray()
            .map(extractOptionFromElement)

        const previouslyHighlightedOptions = $previouslyHighlightedOptions
            .toArray()
            .map(extractOptionFromElement)

        const notHighlightedSourceOptions = sourceOptions.filter(
            sourceOption =>
                !previouslyHighlightedOptions.find(
                    previouslyHighlightedOption => {
                        return (
                            sourceOption.value ===
                                previouslyHighlightedOption.value &&
                            sourceOption.label ===
                                previouslyHighlightedOption.label
                        )
                    }
                )
        )

        expect(notHighlightedSourceOptions).to.not.have.class('highlighted')
    })
})

Then('the enabled options in the range are highlighted', () => {
    cy.all(
        () => cy.get('{transfer-sourceoptions} {transferoption}'),
        () => cy.get('@clickedEnabledOption'),
        () => cy.get('@clickedWithShiftEnabledOption')
    ).then(([$all, $clickedEnabledOption, $clickedWithShiftEnabledOption]) => {
        const from = $clickedEnabledOption.index()
        const to = $clickedWithShiftEnabledOption.index()
        const $allInRange = $all.slice(from, to + 1)
        const $allInRangeEnabled = $allInRange.filter(':not(.disabled)')

        expect($allInRangeEnabled).to.have.class('highlighted')
    })
})
