import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { extractOptionFromElement } from '../common'

Given('the option list has one or more items', () => {
    cy.visitStory('Transfer highlight range of options', 'Has Options')
    cy.get('{transfer-sourceoptions}')
        .as('list')
        .find('{transferoption}')
        .should('have.length.of.at.least', 1)
})

Given('the selected list has one or more items', () => {
    cy.visitStory('Transfer highlight range of options', 'Has Selected')
    cy.get('{transfer-pickedoptions}')
        .as('list')
        .as('list')
        .find('{transferoption}')
        .should('have.length.of.at.least', 1)
})

Given('the option list has three or more items', () => {
    cy.visitStory('Transfer highlight range of options', 'Has Options')
    cy.get('{transfer-sourceoptions}')
        .as('list')
        .as('list')
        .find('{transferoption}')
        .should('have.length.of.at.least', 3)
})

Given('the selected list has three or more items', () => {
    cy.visitStory('Transfer highlight range of options', 'Has Selected')
    cy.get('{transfer-pickedoptions}')
        .as('list')
        .as('list')
        .find('{transferoption}')
        .should('have.length.of.at.least', 3)
})

Given('the option list has many items', () => {
    cy.visitStory('Transfer highlight range of options', 'Has Options')
    cy.get('{transfer-sourceoptions}')
        .as('list')
        .as('list')
        .find('{transferoption}')
        .should('have.length.of.at.least', 5)
})

Given('the selected list has many items', () => {
    cy.visitStory('Transfer highlight range of options', 'All Selected')
    cy.get('{transfer-pickedoptions}')
        .as('list')
        .as('list')
        .find('{transferoption}')
        .should('have.length.of.at.least', 5)
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

Given('there are at least two options following the highlighted option', () => {
    cy.get('@initiallyHighlighted')
        .next()
        .should('exist')
        .as('firstBelowInitiallyHighlighted')
        .next()
        .should('exist')
        .as('secondBelowInitiallyHighlighted')
})

Given('several options are highlighted', () => {
    cy.get('@list')
        .find('{transferoption}')
        .then($option =>
            $option
                .eq(0)
                .add($option.eq(4))
                .add($option.eq(6))
        )
        .as('initiallyHighlightedMultiple')
        .each($option => cy.wrap($option).clickWith('ctrl'))
})

Given(
    'there are at least two options following the last highlighted option',
    () => {
        cy.get('@initiallyHighlightedMultiple')
            .last('last')
            .next()
            .should('exist')
            .as('firstBelowInitiallyHighlighted')
            .next()
            .should('exist')
            .as('secondBelowInitiallyHighlighted')
    }
)

When('the user clicks an item with the SHIFT modifier key', () => {
    cy.get('@list')
        .find('{transferoption}')
        .first()
        .clickWith('ctrl')
        .as('initiallyHighlighted')
})

When('the user clicks the highlighted item with the SHIFT modifier key', () => {
    cy.get('@initiallyHighlighted')
        .clickWith('shift')
        .as('hiddenHighlighted')
})

When(
    'the user highlightes the second options following the highlighted option with the SHIFT key modifier',
    () => {
        cy.get('@secondBelowInitiallyHighlighted').clickWith('shift')
    }
)

When(
    'the user highlightes the second options following the last highlighted option',
    () => {
        cy.get('@initiallyHighlightedMultiple')
            // last highlighted option
            .last()

            // next sibling
            .next()
            .as('firstBelowLastHighlighted')

            // second next sibling
            .next()
            .as('secondBelowLastHighlighted')
            .clickWith('shift')
    }
)

When('the user {string} clicks a highlighted option', modifierKey => {
    cy.get('@initiallyHighlightedMultiple')
        .eq(0)
        .clickWith(modifierKey)
        .as('controlClicked')
})

When('the user changed the filter to exclude the last clicked option', () => {
    cy.get('{transfer-filter} input').type('ARI')
})

When('the user SHIFT-clicks a non-highlighted option', () => {
    cy.get('@list')
        .find('{transferoption}')
        .invoke('eq', 4)
        .clickWith('shift')
        .as('firstShiftClicked')
})

When('the user SHIFT-clicks an option', () => {
    cy.get('@list')
        .find('{transferoption}')
        .eq(0)
        .clickWith('shift')

    cy.wrap(0).as('firstClickedIndexWithShift')
})

When('the user SHIFT-clicks another option', () => {
    cy.get('@list')
        .find('{transferoption}')
        .eq(5)
        .clickWith('shift')

    cy.wrap(5).as('secondClickedIndexWithShift')
})

Then('the clicked option should be highlighted', () => {
    cy.get('@initiallyHighlighted').should('have.class', 'highlighted')
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

Then('the clicked options should be highlighted', () => {
    cy.all(
        () => cy.get('@initiallyHighlighted'),
        () => cy.get('@secondBelowInitiallyHighlighted')
    ).then(([$initiallyHighlighted, $secondBelowInitiallyHighlighted]) => {
        expect($initiallyHighlighted).to.have.class('highlighted')
        expect($secondBelowInitiallyHighlighted).to.have.class('highlighted')
    })
})

Then(
    'all options between the initially highlighted option and the clicked option are highlighted',
    () => {
        cy.get('@firstBelowInitiallyHighlighted').should(
            'have.class',
            'highlighted'
        )
    }
)

Then(
    'the option highlighted most recently without SHIFT should be highlighted',
    () => {
        cy.get('@initiallyHighlightedMultiple')
            .last()
            .should('have.class', 'highlighted')
    }
)

Then('the option clicked with SHIFT should be highlighted', () => {
    cy.get('@secondBelowInitiallyHighlighted').should(
        'have.class',
        'highlighted'
    )
})

Then(
    'all options between the option highlighted most recently without SHIFT and the clicked option are highlighted',
    () => {
        cy.get('@firstBelowInitiallyHighlighted').should(
            'have.class',
            'highlighted'
        )
    }
)

Then(
    'all other previously highlighted options are not highlighted anymore',
    () => {
        cy.all(
            () =>
                cy
                    .get('@initiallyHighlightedMultiple')
                    .last()
                    .invoke('index'),
            () => cy.get('@initiallyHighlightedMultiple')
        ).then(
            ([
                lastInitiallyHighlightedIndex,
                $initiallyHighlightedMultiple,
            ]) => {
                $initiallyHighlightedMultiple
                    .filter((_, el) => {
                        const $el = Cypress.$(el)
                        return $el.index() !== lastInitiallyHighlightedIndex
                    })
                    .each((_, el) => {
                        const $el = Cypress.$(el)
                        expect($el).to.not.have.class('highlighted')
                    })
            }
        )
    }
)

Then(
    'the range from the visually first highlighted option to the SHIFT-clicked option is highlighted',
    () => {
        cy.all(
            () => cy.get('@initiallyHighlightedMultiple'),
            () => cy.get('@firstShiftClicked'),
            () => cy.get('@list').find('{transferoption}')
        ).then(([$initiallyHighlightedMultiple, $firstShiftClicked, $all]) => {
            const firstVisibleHighlightedIndex = $initiallyHighlightedMultiple
                .filter(':visible')
                .eq(0)
                .index()
            const shiftIndex = $firstShiftClicked.index()
            const from = Math.min(firstVisibleHighlightedIndex, shiftIndex)
            const to = Math.max(firstVisibleHighlightedIndex, shiftIndex)
            const $insideRange = $all.slice(from, to + 1)
            const $outsideRange = $all.slice(0, from).add($all.slice(to + 1))

            $insideRange.each((index, option) => {
                expect(Cypress.$(option)).to.have.class('highlighted')
            })

            $outsideRange.each(option =>
                expect(Cypress.$(option)).to.not.have.class('highlighted')
            )
        })
    }
)

Then(
    'the range from the first clicked option to the second clicked option is highlighted',
    () => {
        cy.all(
            () => cy.get('@firstClickedIndexWithShift'),
            () => cy.get('@secondClickedIndexWithShift'),
            () => cy.get('@list').find('{transferoption}')
        ).then(
            ([
                firstClickedIndexWithShift,
                secondClickedIndexWithShift,
                $all,
            ]) => {
                const from = Math.min(
                    firstClickedIndexWithShift,
                    secondClickedIndexWithShift
                )
                const to = Math.max(
                    firstClickedIndexWithShift,
                    secondClickedIndexWithShift
                )
                const $insideRange = $all.slice(from, to + 1)
                const $outsideRange = $all
                    .slice(0, from)
                    .add($all.slice(to + 1))

                $insideRange.each((index, option) => {
                    expect(Cypress.$(option)).to.have.class('highlighted')
                })

                $outsideRange.each(option =>
                    expect(Cypress.$(option)).to.not.have.class('highlighted')
                )
            }
        )
    }
)
