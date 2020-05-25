import '../common'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given(
    'there is enough space below the anchor to fit the MultiSelect menu',
    () => {
        cy.visitStory('MultiSelect', 'Default position')
    }
)

Given(
    'there is not enough space below the anchor to fit the MultiSelect menu',
    () => {
        cy.visitStory('MultiSelect', 'Flipped position')
    }
)

Given(
    'there is not enough space above or below the anchor to fit the MultiSelect menu',
    () => {
        cy.visitStory('MultiSelect', 'Shifted into view')
    }
)

Given('the input is empty', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]')
        .should('exist')
        .should('have.length', 1)
        .then(inputs => {
            const $input = inputs[0]
            const inputRect = $input.getBoundingClientRect()

            return inputRect.height
        })
        .as('emptyInputHeight')

    cy.get('[data-test="dhis2-uicore-select-input"] .root').should('be.empty')
})

When('the MultiSelect is clicked', () => {
    cy.get('[data-test="dhis2-uicore-multiselect"]').click()
})

When('the window is scrolled down', () => {
    cy.scrollTo(0, 800)
})

When('the window is resized to a greater width', () => {
    cy.viewport(1200, 660)
})

When('an option is clicked', () => {
    cy.contains('option one').click()
})

Then('the Input grows in height', () => {
    const emptyInputHeight = '@emptyInputHeight'
    const inputDataTest = '[data-test="dhis2-uicore-select-input"]'

    cy.getAll(emptyInputHeight, inputDataTest).should(
        ([emptyInputHeight, inputs]) => {
            expect(inputs.length).to.equal(1)

            const $input = inputs[0]
            const inputRect = $input.getBoundingClientRect()

            expect(inputRect.height).to.be.greaterThan(emptyInputHeight)
        }
    )
})

Then('the top of the menu is aligned with the bottom of the input', () => {
    const selectDataTest = '[data-test="dhis2-uicore-multiselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(selectDataTest, menuDataTest).should(([selects, menus]) => {
        expect(selects.length).to.equal(1)
        expect(menus.length).to.equal(1)

        const $select = selects[0]
        const $menu = menus[0]

        const selectRect = $select.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(menuRect.top).to.equal(selectRect.bottom)
    })
})

Then('the bottom of the menu is aligned with the top of the input', () => {
    const selectDataTest = '[data-test="dhis2-uicore-multiselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(selectDataTest, menuDataTest).should(([selects, menus]) => {
        expect(selects.length).to.equal(1)
        expect(menus.length).to.equal(1)

        const $select = selects[0]
        const $menu = menus[0]

        const selectRect = $select.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(selectRect.top).to.equal(menuRect.bottom)
    })
})

Then('it is rendered on top of the MultiSelect', () => {
    const selectDataTest = '[data-test="dhis2-uicore-multiselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(selectDataTest, menuDataTest).should(([selects, menus]) => {
        expect(selects.length).to.equal(1)
        expect(menus.length).to.equal(1)

        const $select = selects[0]
        const $menu = menus[0]

        const selectRect = $select.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(selectRect.top).to.be.greaterThan(menuRect.top)
        expect(menuRect.bottom).to.be.greaterThan(selectRect.bottom)
    })
})

Then('the left of the Menu is aligned with the left of the Input', () => {
    const selectDataTest = '[data-test="dhis2-uicore-multiselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(selectDataTest, menuDataTest).should(([selects, menus]) => {
        expect(selects.length).to.equal(1)
        expect(menus.length).to.equal(1)

        const $select = selects[0]
        const $menu = menus[0]

        const selectRect = $select.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(selectRect.left).to.equal(menuRect.left)
    })
})

Then('the Menu and the Input have an equal width', () => {
    const inputDataTest = '[data-test="dhis2-uicore-multiselect"] .root-input'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(inputDataTest, menuDataTest).should(([inputs, menus]) => {
        expect(inputs.length).to.equal(1)
        expect(menus.length).to.equal(1)

        const $input = inputs[0]
        const $menu = menus[0]

        const inputRect = $input.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(inputRect.width).to.equal(menuRect.width)
    })
})
