import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { extractOptionFromElement } from '../common/index.js'

Given('none of the supplied options have been selected', () => {
    cy.visitStory('SimpleTransfer Display Order', 'No Selection')
})

Given('some of the supplied options have been selected', () => {
    cy.visitStory('SimpleTransfer Display Order', 'Some Selected')
})

Given('some selectable options are selectable', () => {
    cy.visitStory('SimpleTransfer Display Order', 'Some Selected')
})

When('the user deselects one selected option', () => {
    cy.get('{simple-transfer-pickedoptions}').select([0])
    cy.get('{simple-transfer-pickedoptions}')
        .find('option:selected')
        .then(($el) => $el.toArray().map(extractOptionFromElement))
        .as('deselectedOptions')
    cy.get('{simple-transfer-actions-removeindividual}').click()
})

When('the user deselects multiple selected options', () => {
    cy.get('{simple-transfer-pickedoptions}')
        .select([0, 1, 2])
        .then(() => {
            // Now capture the selected options (after performing the .select([0, 1, 2]))
            cy.get('{simple-transfer-pickedoptions}')
                .find('option:selected') // Get all the selected options
                .then(($highlightedOptions) => {
                    cy.wrap(
                        $highlightedOptions
                            .toArray()
                            .map(extractOptionFromElement)
                    ).as('deselectedOptions')
                })
        })
    cy.get('{simple-transfer-actions-removeindividual}').click()
})

When('the user selects one option', () => {
    cy.get('{simple-transfer-sourceoptions}').select([0])
    cy.get('{simple-transfer-sourceoptions}')
        .find('option:selected')
        .then(($el) => $el.toArray().map(extractOptionFromElement))
        .as('selectedOptions')
    cy.get('{simple-transfer-actions-addindividual}').click()
})

When('the user selects multiple options', () => {
    cy.get('{simple-transfer-sourceoptions}')
        .select([0, 1, 2, 3, 4])
        .then(() => {
            // Now capture the selected options (after performing the .select([0, 1, 2]))
            cy.get('{simple-transfer-sourceoptions}')
                .find('option:selected') // Get all the selected options
                .then(($highlightedOptions) => {
                    cy.wrap(
                        $highlightedOptions
                            .toArray()
                            .map(extractOptionFromElement)
                    ).as('selectedOptions')
                })
        })

    cy.get('{simple-transfer-actions-addindividual}').click()
})

Then(
    'the order of the selectable options should match the order of the supplied options',
    () => {
        cy.all(
            () => cy.window(),
            () => cy.get('{simple-transfer-sourceoptions} {transferoption}')
        ).should(([win, $options]) => {
            const { options } = win
            const selectableSourceOptions = $options
                .toArray()
                .map(extractOptionFromElement)

            expect(selectableSourceOptions).to.eql(options)
        })
    }
)

Then(
    'the order of the remaining selectable options should match the order of the supplied options',
    () => {
        cy.all(
            () => cy.window(),
            () => cy.get('{simple-transfer-sourceoptions} {transferoption}')
        ).should(([win, $options]) => {
            const selectableSourceOptions = $options
                .toArray()
                .map(extractOptionFromElement)

            const options = win.options.filter((option) =>
                selectableSourceOptions.find(
                    ({ label, value }) =>
                        label === option.label && value === option.value
                )
            )

            expect(selectableSourceOptions).to.eql(options)
        })
    }
)

Then(
    'it should be positioned according to the order of the supplied options',
    () => {
        cy.all(
            () => cy.window(),
            () => cy.get('{simple-transfer-sourceoptions} {transferoption}'),
            () => cy.get('@deselectedOptions')
        ).should(([win, $selectableSourceOptions, deselectedOptions]) => {
            // filter out non-selectable options and compare with selectable options
            // this confirms that the order is correct
            const selectableSourceOptions = $selectableSourceOptions
                .toArray()
                .map(extractOptionFromElement)
            const originalOptions = win.options.filter((option) =>
                selectableSourceOptions.find(
                    ({ label, value }) =>
                        label === option.label && value === option.value
                )
            )
            expect(selectableSourceOptions).to.eql(originalOptions)

            // and confirm that the deselected option is in the selectable options list
            const [deselectedOption] = deselectedOptions
            const hasOption = !!selectableSourceOptions.find(
                ({ label, value }) =>
                    label === deselectedOption.label &&
                    value === deselectedOption.value
            )
            expect(hasOption).to.equal(true)
        })
    }
)

Then(
    'all should take the position according to the order of the supplied options',
    () => {
        cy.all(
            () => cy.window(),
            () => cy.get('{simple-transfer-sourceoptions} {transferoption}'),
            () => cy.get('@deselectedOptions')
        ).should(([win, $selectableSourceOptions, deselectedOptions]) => {
            const selectableSourceOptions = $selectableSourceOptions
                .toArray()
                .map(extractOptionFromElement)
            const options = win.options.filter((option) =>
                selectableSourceOptions.find(
                    ({ label, value }) =>
                        label === option.label && value === option.value
                )
            )
            expect(selectableSourceOptions).to.eql(options)

            const hasAllOptions = deselectedOptions.every(
                (deselectedOption) => {
                    const result = !!selectableSourceOptions.find(
                        ({ label, value }) =>
                            label === deselectedOption.label &&
                            value === deselectedOption.value
                    )

                    return result
                }
            )
            expect(hasAllOptions).to.equal(true)
        })
    }
)

Then('it should be added to the end of the selected options list', () => {
    cy.all(
        () => cy.get('@selectedOptions'),
        () => cy.get('{simple-transfer-pickedoptions} {transferoption}')
    ).should(([transferredOptions, $selectedOptions]) => {
        const lastSelectedOptions = $selectedOptions
            .toArray()
            .slice(transferredOptions.length * -1)
            .map(extractOptionFromElement)

        expect(transferredOptions).to.eql(lastSelectedOptions)
    })
})

Then(
    'they should be added to the end of the selected options list in the order they have been highlighted',
    () => {
        cy.all(
            () => cy.get('@selectedOptions'),
            () => cy.get('{simple-transfer-pickedoptions} {transferoption}')
        ).should(([transferredOptions, $selectedOptions]) => {
            const lastSelectedOptions = $selectedOptions
                .toArray()
                .slice(transferredOptions.length * -1)
                .map(extractOptionFromElement)

            expect(transferredOptions).to.eql(lastSelectedOptions)
        })
    }
)
