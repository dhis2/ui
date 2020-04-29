import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { extractOptionFromElement } from '../common'

Given('none of the supplied options have been selected', () => {
    cy.visitStory('Transfer Display Order', 'No Selection')
})

Given('some of the supplied options have been selected', () => {
    cy.visitStory('Transfer Display Order', 'Some Selected')
})

Given('some selectable options are selectable', () => {
    cy.visitStory('Transfer Display Order', 'Some Selected')
})

When('the user deselects one selected option', () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        .first()
        .click()
    cy.get('{transfer-pickedoptions}')
        .find('.highlighted')
        .then($el => $el.toArray().map(extractOptionFromElement))
        .as('deselectedOptions')
    cy.get('{transfer-actions-removeindividual}').click()
})

When('the user deselects multiple selected options', () => {
    cy.get('{transfer-pickedoptions} {transferoption}')
        // should take third, then first item
        .then($options => {
            const $arr = $options.toArray()
            return [$arr[2], $arr[0]]
        })
        .each($option => cy.wrap($option).clickWith('cmd'))
        .then($options =>
            cy
                .wrap($options.toArray().map(extractOptionFromElement))
                .as('deselectedOptions')
        )

    cy.get('{transfer-actions-removeindividual}').click()
})

When('the user selects one option', () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        .first()
        .click()
    cy.get('{transfer-sourceoptions}')
        .find('.highlighted')
        .then($el => $el.toArray().map(extractOptionFromElement))
        .as('selectedOptions')
    cy.get('{transfer-actions-addindividual}').click()
})

When('the user selects multiple options', () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        // should take fifth, then first item
        .then($options => {
            const $arr = $options.toArray()
            return [$arr[4], $arr[0]]
        })
        .each($option => cy.wrap($option).clickWith('ctrl'))
        .then($options => {
            cy.wrap($options.toArray().map(extractOptionFromElement))
                .as('selectedOptions')
                .then(console.log.bind(null, 'selectedOptions'))
        })

    cy.get('{transfer-actions-addindividual}').click()
})

Then(
    'the order of the selectable options should match the order of the supplied options',
    () => {
        cy.all(
            () => cy.window(),
            () => cy.get('{transfer-sourceoptions} {transferoption}')
        ).then(([win, $options]) => {
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
            () => cy.get('{transfer-sourceoptions} {transferoption}')
        ).then(([win, $options]) => {
            const selectableSourceOptions = $options
                .toArray()
                .map(extractOptionFromElement)

            const options = win.options.filter(option =>
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
            () => cy.get('{transfer-sourceoptions} {transferoption}'),
            () => cy.get('@deselectedOptions')
        ).then(([win, $selectableSourceOptions, deselectedOptions]) => {
            // filter out non-selectable options and compare with selectable options
            // this confirms that the order is correct
            const selectableSourceOptions = $selectableSourceOptions
                .toArray()
                .map(extractOptionFromElement)
            const originalOptions = win.options.filter(option =>
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
            () => cy.get('{transfer-sourceoptions} {transferoption}'),
            () => cy.get('@deselectedOptions')
        ).then(([win, $selectableSourceOptions, deselectedOptions]) => {
            console.log('deselectedOptions', deselectedOptions)
            const selectableSourceOptions = $selectableSourceOptions
                .toArray()
                .map(extractOptionFromElement)
            const options = win.options.filter(option =>
                selectableSourceOptions.find(
                    ({ label, value }) =>
                        label === option.label && value === option.value
                )
            )
            expect(selectableSourceOptions).to.eql(options)

            const hasAllOptions = deselectedOptions.every(deselectedOption => {
                const result = !!selectableSourceOptions.find(
                    ({ label, value }) =>
                        label === deselectedOption.label &&
                        value === deselectedOption.value
                )

                if (!result) {
                    console.log('deselectedOption', deselectedOption)
                }
                return result
            })
            expect(hasAllOptions).to.equal(true)
        })
    }
)

Then('it should be added to the end of the selected options list', () => {
    cy.all(
        () => cy.get('@selectedOptions'),
        () => cy.get('{transfer-pickedoptions} {transferoption}')
    ).then(([transferredOptions, $selectedOptions]) => {
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
            () => cy.get('{transfer-pickedoptions} {transferoption}')
        ).then(([transferredOptions, $selectedOptions]) => {
            const lastSelectedOptions = $selectedOptions
                .toArray()
                .slice(transferredOptions.length * -1)
                .map(extractOptionFromElement)

            console.log('transferredOptions', transferredOptions)
            console.log('lastSelectedOptions', lastSelectedOptions)
            expect(transferredOptions).to.eql(lastSelectedOptions)
        })
    }
)
