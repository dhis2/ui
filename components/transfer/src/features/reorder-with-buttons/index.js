import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('reordering of items is enabled', () => {
    // no op
})

Given('the selected list has three items', () => {
    cy.visitStory('Transfer Reorder Buttons', 'Has Three Selected')
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
        .as('previousValue', { type: 'static' })

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

When("the user clicks the 'move to top' button", () => {
    // force, so we click disabled buttons
    cy.get('{transfer-reorderingactions-buttonmovetotop}').click({
        force: true,
    })
})

When("the user clicks the 'move to bottom' button", () => {
    // force, so we click disabled buttons
    cy.get('{transfer-reorderingactions-buttonmovetobottom}').click({
        force: true,
    })
})

Then('the highlighted item should be moved to the {int}. place', (next) => {
    const index = next - 1

    cy.get('@previousValue')
        .then((previousValue) => cy.get(`[data-value="${previousValue}"]`))
        .invoke('index')
        .should('equal', index)
})

Then('all four reorder buttons should be disabled', () => {
    cy.get('{transfer-reorderingactions-buttonmovetotop}').should(
        'have.attr',
        'disabled'
    )
    cy.get('{transfer-reorderingactions-buttonmoveup}').should(
        'have.attr',
        'disabled'
    )
    cy.get('{transfer-reorderingactions-buttonmovedown}').should(
        'have.attr',
        'disabled'
    )
    cy.get('{transfer-reorderingactions-buttonmovetobottom}').should(
        'have.attr',
        'disabled'
    )
})

// --- Multi-select ---

Given('the selected list has eight items', () => {
    cy.visitStory('Transfer Reorder Buttons', 'Has Some Selected')
    cy.get('{transfer-pickedoptions} {transferoption}').should('have.length', 8)
})

const highlightPositionWithCtrl = (position) =>
    cy
        .get('{transfer-pickedoptions} {transferoption}')
        .eq(position - 1)
        .then(($option) =>
            cy.get('@highlightedValues').then((values) => {
                values.push($option.attr('data-value'))
                return $option
            })
        )
        .clickWith('ctrl')

When(
    'the user highlights the items at positions {int} and {int}',
    (first, second) => {
        cy.wrap([]).as('highlightedValues')
        highlightPositionWithCtrl(first)
        highlightPositionWithCtrl(second)
    }
)

When('the user highlights every item in the selected list', () => {
    cy.wrap([]).as('highlightedValues')
    cy.get('{transfer-pickedoptions} {transferoption}').each(($option) => {
        cy.get('@highlightedValues').then((values) => {
            values.push($option.attr('data-value'))
        })
        cy.wrap($option).clickWith('ctrl')
    })
})

Then('those items should be at positions {int} and {int}', (first, second) => {
    cy.get('@highlightedValues').then((values) => {
        const targetIndices = [first - 1, second - 1]
        values.forEach((value, i) => {
            cy.get(`[data-value="${value}"]`)
                .invoke('index')
                .should('equal', targetIndices[i])
        })
    })
})

Then('those items should still be highlighted', () => {
    cy.get('@highlightedValues').then((values) => {
        values.forEach((value) => {
            cy.get(`{transfer-pickedoptions} [data-value="${value}"]`).should(
                'have.class',
                'highlighted'
            )
        })
    })
})

const reorderButtonSelectors = {
    'move up': '{transfer-reorderingactions-buttonmoveup}',
    'move down': '{transfer-reorderingactions-buttonmovedown}',
    'move to top': '{transfer-reorderingactions-buttonmovetotop}',
    'move to bottom': '{transfer-reorderingactions-buttonmovetobottom}',
}

Then(
    'the {string} and {string} buttons should be disabled',
    (first, second) => {
        cy.get(reorderButtonSelectors[first]).should('have.attr', 'disabled')
        cy.get(reorderButtonSelectors[second]).should('have.attr', 'disabled')
    }
)

Then(
    'the {string} and {string} buttons should not be disabled',
    (first, second) => {
        cy.get(reorderButtonSelectors[first]).should(
            'not.have.attr',
            'disabled'
        )
        cy.get(reorderButtonSelectors[second]).should(
            'not.have.attr',
            'disabled'
        )
    }
)
