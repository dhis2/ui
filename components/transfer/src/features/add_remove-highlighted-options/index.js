import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the option list has two or more items', () => {
    cy.visitStory('Transfer add & remove highlighted options', 'Has Options')
    cy.get('{transfer-sourceoptions}').as('list')
})

Given('the selected list has two or more items', () => {
    cy.visitStory('Transfer add & remove highlighted options', 'Has Selected')
    cy.get('{transfer-pickedoptions}').as('list')
})

Given('some items are highlighted', () => {
    cy.get('@list')
        .find('{transferoption}')
        .then($options => {
            const multipleOptions = $options.filter(index => index < 3)
            return cy.wrap(multipleOptions)
        })
        .as('highlightedMultipleOptions')
        .each($option => cy.wrap($option).clickWith('ctrl'))
})

When(
    'the user clicks multiple items with {string} which are not highlighted',
    modifierKey => {
        cy.get('@list')
            .find('{transferoption}')
            .then($options => {
                const multipleOptions = $options.filter(index => index < 3)
                return cy.wrap(multipleOptions)
            })
            .as('multipleOptions')
            .each($option =>
                cy
                    .wrap($option)
                    .clickWith(modifierKey === 'cmd' ? 'meta' : modifierKey)
            )
    }
)

When(
    'the user clicks on one item with {string} which is highlighted',
    modifierKey => {
        cy.get('@highlightedMultipleOptions')
            .first()
            .clickWith(modifierKey === 'cmd' ? 'meta' : modifierKey)
            .as('clickedOption')
        cy.get('@highlightedMultipleOptions')
            .filter(index => index !== 0)
            .as('remainingHighlightedOptions')
    }
)

When(
    'the user clicks on one item without a modifier key which is highlighted',
    () => {
        cy.get('@highlightedMultipleOptions')
            .first()
            .click()
            .as('clickedOption')
        cy.get('@highlightedMultipleOptions')
            .filter(index => index !== 0)
            .as('remainingHighlightedOptions')
    }
)

Then('all of the clicked items should be highlighted', () => {
    cy.get('@multipleOptions').each($option => {
        expect($option).to.have.class('highlighted')
    })
})

Then('the clicked item should not be highlighted', () => {
    cy.get('@clickedOption').should('not.have.class', 'highlighted')
})

Then('the other previously highlighted items should remain highlighted', () => {
    cy.get('@remainingHighlightedOptions').each($option => {
        expect($option).to.have.class('highlighted')
    })
})

Then('the clicked option is highlighted', () => {
    cy.get('@clickedOption').should('have.class', 'highlighted')
})

Then('the other previously highlighted items should not be highlighted', () => {
    cy.get('@remainingHighlightedOptions').each($option => {
        expect($option).to.not.have.class('highlighted')
    })
})
