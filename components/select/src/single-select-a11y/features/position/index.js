import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'there is enough space below the anchor to fit the SingleSelect menu',
    () => {
        cy.visitStory('Single Select A11y', 'Default position')
    }
)

Given(
    'there is not enough space below the anchor to fit the SingleSelect menu',
    () => {
        cy.visitStory('Single Select A11y', 'Flipped position')
    }
)

Given(
    'there is not enough space above or below the anchor to fit the SingleSelect menu',
    () => {
        cy.visitStory('Single Select A11y', 'Shifted into view')
    }
)

When('the SingleSelect is clicked', () => {
    cy.findByRole('combobox').click()
})

When('the window is scrolled down', () => {
    // Ensure the body can scroll first
    cy.get('body').then(($body) => $body.height('5000px'))
    cy.scrollTo(0, 800)
})

Then('the top of the menu is aligned with the bottom of the input', () => {
    const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.all(
        () => cy.findByRole('combobox'),
        () => cy.findByRole('listbox')
    ).should(([selectedValue, menu]) => {
        expect(selectedValue.length).to.equal(1)
        expect(menu.length).to.equal(1)

        const $selectedValue = selectedValue[0]
        const $menu = menu[0]

        const selectedValueRect = $selectedValue.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        // The listbox is inside a container with a border,
        // hence the increased delta
        expect(menuRect.top).to.be.closeTo(selectedValueRect.bottom, 2)
    })
})

Then('the bottom of the menu is aligned with the top of the input', () => {
    const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.all(
        () => cy.findByRole('combobox'),
        // We need to get the parent as the menu itself
        // extends withing the div container
        () => cy.findByRole('listbox').invoke('parent')
    ).should(([selectedValue, menu]) => {
        expect(selectedValue.length).to.equal(1)
        expect(menu.length).to.equal(1)

        const $selectedValue = selectedValue[0]
        const $menu = menu[0]

        const selectedValueRect = $selectedValue.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(selectedValueRect.top).to.be.closeTo(menuRect.bottom, 1)
    })
})

Then('it is rendered on top of the SingleSelect', () => {
    const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.all(
        () => cy.findByRole('combobox'),
        () => cy.findByRole('listbox')
    ).should(([selectedValue, menu]) => {
        expect(selectedValue.length).to.equal(1)
        expect(menu.length).to.equal(1)

        const $selectedValue = selectedValue[0]
        const $menu = menu[0]

        const selectedValueRect = $selectedValue.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(selectedValueRect.top).to.be.greaterThan(menuRect.top)
        expect(menuRect.bottom).to.be.greaterThan(selectedValueRect.bottom)
    })
})

Then(
    'the left of the SingleSelect is aligned with the left of the anchor',
    () => {
        const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
        const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            // The listbox is inside a container with a border,
            // hence the increased delta
            expect(selectedValueRect.left).to.be.closeTo(menuRect.left, 2)
        })
    }
)
