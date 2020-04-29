import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { parseSelectorWithDataTest } from '../../../support/common/parseSelectorWithDataTest'
import { extractOptionFromElement } from '../common'

Given('some options are selectable', () => {
    cy.visitStory('Transfer Transferring Items', 'Has Options')
})

Given('some options are selected', () => {
    cy.visitStory('Transfer Transferring Items', 'Some Selected')
})

Given('one or more items in the options list are highlighted', () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        .filter(index => index < 3)
        // shuffle order so we can check they're added in the right order
        .then($options => cy.wrap([$options[2], $options[0], $options[1]]))
        .each($option => cy.wrap($option).clickWith('ctrl'))
        .then($options => $options.toArray().map(extractOptionFromElement))
        .as('itemsToBeSelected')
})

Given('some items in the options list are highlighted', () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        .filter(index => index < 3)
        // shuffle order so we can check they're added in the right order
        .then($options => cy.wrap([$options[2], $options[0], $options[1]]))
        .each($option => cy.wrap($option).clickWith('ctrl'))
        .then($options => $options.toArray().map(extractOptionFromElement))
        .as('itemsToBeSelected')
})

Given('some items in the selected list are highlighted', () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        .filter(index => index < 3)
        // shuffle order so we can check they're added in the right order
        .then($options => cy.wrap([$options[2], $options[0], $options[1]]))
        .each($option => cy.wrap($option).clickWith('ctrl'))
        .then($options => $options.toArray().map(extractOptionFromElement))
        .as('itemsToBeDeselected')
})

When("the user clicks the 'move to selected list' button", () => {
    cy.get('{transfer-actions-addindividual}').click()
})

When("the user clicks the 'move to options list' button", () => {
    cy.get('{transfer-actions-removeindividual}').click()
})

When("the user clicks the 'move all to selected list' button", () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        .then($options => $options.toArray().map(extractOptionFromElement))
        .as('itemsToBeSelected')
    cy.get('{transfer-actions-addall}').click()
})

When("the user clicks the 'move all to options list' button", () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        .then($options => $options.toArray().map(extractOptionFromElement))
        .as('itemsToBeDeselected')
    cy.get('{transfer-actions-removeall}').click()
})

When('the user double clicks an item in the options list', () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        .first()
        .dblclick()
        .then(extractOptionFromElement)
        .as('doubleClickedPlainOption')
})

When('the user double clicks an item in the selected list', () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        .first()
        .dblclick()
        .then(extractOptionFromElement)
        .as('doubleClickedPlainOption')
})

Then('the highlighted items should be removed from the options list', () => {
    cy.all(
        () => cy.get('@itemsToBeSelected'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([itemsToBeSelected, $selectableSourceOptions]) => {
        const selectableSourceOptions = $selectableSourceOptions
            .toArray()
            .map(extractOptionFromElement)
        const itemsStillSelectable = itemsToBeSelected.every(
            itemToBeSelected => {
                const result = selectableSourceOptions.find(
                    ({ label, value }) =>
                        label === itemToBeSelected.label &&
                        value === itemToBeSelected.value
                )

                return result
            }
        )

        expect(itemsStillSelectable).to.equal(false)
    })
})

Then('the highlighted items should be visible in the selected list', () => {
    cy.all(
        () => cy.get('@itemsToBeSelected'),
        () => cy.get('{transfer-pickedoptions} {transferoption}')
    ).then(([itemsToBeSelected, $selectedOptions]) => {
        const selectedOptions = $selectedOptions
            .toArray()
            .map(extractOptionFromElement)
        const itemsSelected = itemsToBeSelected.every(itemToBeSelected =>
            selectedOptions.find(
                ({ label, value }) =>
                    label === itemToBeSelected.label &&
                    value === itemToBeSelected.value
            )
        )

        expect(itemsSelected).to.equal(true)
    })
})

Then(
    'the highlighted items should be appended to the selected list in the order they were highlighted',
    () => {
        cy.all(
            () => cy.get('@itemsToBeSelected'),
            () => cy.get('{transfer-pickedoptions} {transferoption}')
        ).then(([itemsToBeSelected, $selectedOptions]) => {
            const lastNSelectedOptions = $selectedOptions
                .toArray()
                .map(extractOptionFromElement)
                .slice(itemsToBeSelected.length * -1)

            expect(itemsToBeSelected).to.eql(lastNSelectedOptions)
        })
    }
)

Then('the highlighted items should be removed from the selected list', () => {
    cy.all(
        () => cy.get('@itemsToBeDeselected'),
        () => cy.get('{transfer-pickedoptions} {transferoption}')
    ).then(([itemsToBeDeselected, $selectedOptions]) => {
        const selectedOptions = $selectedOptions
            .toArray()
            .map(extractOptionFromElement)
        const itemsStillSelected = itemsToBeDeselected.every(
            itemToBeSelected => {
                const result = selectedOptions.find(
                    ({ label, value }) =>
                        label === itemToBeSelected.label &&
                        value === itemToBeSelected.value
                )

                return result
            }
        )

        expect(itemsStillSelected).to.equal(false)
    })
})

Then('the highlighted items should be visible in the options list', () => {
    cy.all(
        () => cy.get('@itemsToBeDeselected'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([itemsToBeDeselected, $selectedOptions]) => {
        const selectedOptions = $selectedOptions
            .toArray()
            .map(extractOptionFromElement)
        const itemsSelectable = itemsToBeDeselected.every(itemToBeSelected => {
            const result = selectedOptions.find(
                ({ label, value }) =>
                    label === itemToBeSelected.label &&
                    value === itemToBeSelected.value
            )

            return result
        })

        expect(itemsSelectable).to.equal(true)
    })
})

Then(
    'the highlighted items should be in the original options list ordering',
    () => {
        cy.all(
            () => cy.window(),
            () => cy.get('{transfer-sourceoptions} {transferoption}'),
            () => cy.get('{transfer-pickedoptions} {transferoption}')
        ).then(([win, $selectableSourceOptions, $selectedOptions]) => {
            const selectedOptions = $selectedOptions
                .toArray()
                .map(extractOptionFromElement)
            const selectableSourceOptions = $selectableSourceOptions
                .toArray()
                .map(extractOptionFromElement)
            const allOptionsWithoutSelected = win.options.filter(option => {
                return !selectedOptions.find(
                    ({ label, value }) =>
                        option.label === label && option.value === value
                )
            })

            expect(allOptionsWithoutSelected).to.eql(selectableSourceOptions)
        })
    }
)

Then('all items should be removed from the options list', () => {
    cy.get('{transfer-sourceoptions} {transferoption}').should('not.exist')
})

Then(
    'all items removed from options list should be visible in the selected list',
    () => {
        cy.all(
            () => cy.get('@itemsToBeSelected'),
            () => cy.get('{transfer-pickedoptions} {transferoption}')
        ).then(([itemsToBeSelected, $selectedOptions]) => {
            const selectedOptions = $selectedOptions
                .toArray()
                .map(extractOptionFromElement)
            const allSelected = itemsToBeSelected.every(option => {
                return selectedOptions.find(
                    ({ label, value }) =>
                        option.label === label && option.value === value
                )
            })

            expect(allSelected).to.equal(true)
        })
    }
)

Then(
    'the transferred items should be appended to the selected list in the order they were displayed in the options list',
    () => {
        cy.all(
            () => cy.get('@itemsToBeSelected'),
            () => cy.get('{transfer-pickedoptions} {transferoption}')
        ).then(([itemsToBeSelected, $selectedOptions]) => {
            const selectedOptions = $selectedOptions
                .toArray()
                .map(extractOptionFromElement)
            const previouslySelectedSubset = selectedOptions.slice(
                -1 * itemsToBeSelected.length
            )

            expect(itemsToBeSelected).to.eql(previouslySelectedSubset)
        })
    }
)

Then('all items should be removed from the selected list', () => {
    cy.get('{transfer-pickedoptions} {transferoption}').should('not.exist')
})

Then(
    'all items removed from selected list should be visible in the options list',
    () => {
        cy.all(
            () => cy.get('@itemsToBeDeselected'),
            () => cy.get('{transfer-sourceoptions} {transferoption}')
        ).then(([itemsToBeDeselected, $selectableSourceOptions]) => {
            const selectableSourceOptions = $selectableSourceOptions
                .toArray()
                .map(extractOptionFromElement)
            const allSelectable = itemsToBeDeselected.every(option => {
                return selectableSourceOptions.find(
                    ({ label, value }) =>
                        option.label === label && option.value === value
                )
            })

            expect(allSelectable).to.equal(true)
        })
    }
)

Then(
    'the transferred items should be appended to the selected list in the order they were displayed in the options list',
    () => {
        cy.all(
            () => cy.get('@itemsToBeSelected'),
            () => cy.get('{transfer-pickedoptions} {transferoption}')
        ).then(([itemsToBeSelected, $selectedOptions]) => {
            const selectedOptions = $selectedOptions
                .toArray()
                .map(extractOptionFromElement)
            const previouslySelectedSubset = selectedOptions.slice(
                -1 * itemsToBeSelected.length
            )

            expect(itemsToBeSelected).to.eql(previouslySelectedSubset)
        })
    }
)

Then('the options list items should be ordered in the original order', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('{transfer-sourceoptions} {transferoption}'),
        () =>
            cy.get('{transfer-pickedoptions}').then($pickedOptions => {
                return $pickedOptions.find(
                    parseSelectorWithDataTest('{transferoption}')
                )
            })
    ).then(([win, $selectableSourceOptions, $pickedOptions]) => {
        const pickedPlainOptions = $pickedOptions
            .toArray()
            .map(extractOptionFromElement)

        const originalOrderWithoutSelected = win.options.filter(
            originalOption => {
                return !pickedPlainOptions.find(
                    pickedPlainOption =>
                        pickedPlainOption.value === originalOption.value &&
                        pickedPlainOption.label === originalOption.label
                )
            }
        )

        const selectableSourceOptions = $selectableSourceOptions
            .toArray()
            .map(extractOptionFromElement)

        expect(originalOrderWithoutSelected).to.eql(selectableSourceOptions)
    })
})

Then('the item should be removed from its options list', () => {
    cy.all(
        () => cy.get('@doubleClickedPlainOption'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([doubleClickedPlainOption, $sourceOptions]) => {
        const sourcePlainOptions = $sourceOptions
            .toArray()
            .map(extractOptionFromElement)

        const found = sourcePlainOptions.find(
            sourcePlainOption =>
                sourcePlainOption.value === doubleClickedPlainOption.value &&
                sourcePlainOption.label === doubleClickedPlainOption.label
        )

        expect(found).to.not.equal(true)
    })
})

Then('the item should be visible at the bottom of the selected list', () => {
    cy.all(
        () => cy.get('@doubleClickedPlainOption'),
        () => cy.get('{transfer-pickedoptions} {transferoption}')
    ).then(([doubleClickedPlainOption, $pickedOptions]) => {
        const lastSourcePlainOption = $pickedOptions
            .last()
            .toArray()
            .map(extractOptionFromElement)
            .pop()

        const doubleClickedOptionIsLast =
            lastSourcePlainOption.value === doubleClickedPlainOption.value &&
            lastSourcePlainOption.label === doubleClickedPlainOption.label

        expect(doubleClickedOptionIsLast).to.equal(true)
    })
})

Then('the item should be removed from the selected list', () => {
    cy.all(
        () => cy.get('@doubleClickedPlainOption'),
        () => cy.get('{transfer-pickedoptions} {transferoption}')
    ).then(([doubleClickedPlainOption, $pickedOptions]) => {
        const pickedPlainOptions = $pickedOptions
            .toArray()
            .map(extractOptionFromElement)

        const found = pickedPlainOptions.find(
            sourcePlainOption =>
                sourcePlainOption.value === doubleClickedPlainOption.value &&
                sourcePlainOption.label === doubleClickedPlainOption.label
        )

        expect(found).to.not.equal(true)
    })
})
