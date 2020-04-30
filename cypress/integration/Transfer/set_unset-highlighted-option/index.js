import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { extractOptionFromElement } from '../common'

Given('the option list has one or more items', () => {
    cy.visitStory('Transfer set & unset higlighted options', 'Has Options')
    cy.get('{transfer-sourceoptions}').as('list')
})

Given('the selected list has one or more items', () => {
    cy.visitStory('Transfer set & unset higlighted options', 'Has Selected')
    cy.get('{transfer-pickedoptions}').as('list')
})

Given('no item is highlighted', () => {
    cy.get('@list')
        .find('.highlighted')
        .should('not.exist')
})

Given('one item is highlighted', () => {
    cy.get('@list')
        .find('{transferoption}')
        .first()
        .as('initiallyHighlighted')
        .click()
        .should('have.class', 'highlighted')
})

Given('the highlighted item is not visible due to a set filter', () => {
    // store hidden option because dom reference will be lost
    cy.get('@initiallyHighlighted')
        .then($initiallyHighlighted =>
            extractOptionFromElement($initiallyHighlighted)
        )
        .as('hiddenHighlighted')

    cy.get('{transfer-filter} input').type('No result search term')

    cy.get('{transfer-sourceoptions} {transferoption}').should('not.exist')
})

When('the user clicks an item in the list that is not highlighted', () => {
    cy.get('@list')
        .find('{transferoption}')
        .first()
        .invoke('next')
        .as('nextHighlighted')
        .click()
})

When('the user clicks an item in the list that is highlighted', () => {
    cy.get('@initiallyHighlighted')
        .wait(500)
        .click()
})

When('the user selects the visible, highlighted options', () => {
    cy.get('{transfer-actions-addindividual}').click()
})

When('the users changes the filter to include the hidden option', () => {
    cy.get('{transfer-filter} input').clear()
})

Then('the clicked item should be highlighted', () => {
    cy.get('@nextHighlighted').should('have.class', 'highlighted')
})

Then('the previously highlighted item should no longer be highlighted', () => {
    cy.get('@initiallyHighlighted').should('have.not.class', 'highlighted')
})

Then('the option is visible', () => {
    cy.all(
        () => cy.get('@hiddenHighlighted'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([hiddenHighlighted, $options]) => {
        const $hiddenHighlighted = $options.filter((index, optionEl) => {
            const option = extractOptionFromElement(optionEl)

            return (
                option.label === hiddenHighlighted.label &&
                option.value === hiddenHighlighted.value
            )
        })

        expect($hiddenHighlighted).to.be.visible
    })
})

Then('the option is highlighted', () => {
    cy.all(
        () => cy.get('@hiddenHighlighted'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([hiddenHighlighted, $options]) => {
        const $hiddenHighlighted = $options.filter((index, optionEl) => {
            const option = extractOptionFromElement(optionEl)

            return (
                option.label === hiddenHighlighted.label &&
                option.value === hiddenHighlighted.value
            )
        })

        expect($hiddenHighlighted).to.have.class('highlighted')
    })
})

Then('the option is not highlighted', () => {
    cy.all(
        () => cy.get('@hiddenHighlighted'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([hiddenHighlighted, $options]) => {
        const $hiddenHighlighted = $options.filter((index, optionEl) => {
            const option = extractOptionFromElement(optionEl)

            return (
                option.label === hiddenHighlighted.label &&
                option.value === hiddenHighlighted.value
            )
        })

        expect($hiddenHighlighted).not.to.have.class('highlighted')
    })
})
