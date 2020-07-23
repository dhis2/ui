import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given(
    'there is enough space below the anchor to fit the SingleSelect menu',
    () => {
        cy.visitStory('SingleSelect', 'Default position')
    }
)

Given(
    'there is not enough space below the anchor to fit the SingleSelect menu',
    () => {
        cy.visitStory('SingleSelect', 'Flipped position')
    }
)

Given(
    'there is not enough space above or below the anchor to fit the SingleSelect menu',
    () => {
        cy.visitStory('SingleSelect', 'Shifted into view')
    }
)

When('the SingleSelect is clicked', () => {
    cy.get('[data-test="dhis2-uicore-singleselect"]').click()
})

When('the window is scrolled down', () => {
    cy.scrollTo(0, 800)
})

Then('the top of the menu is aligned with the bottom of the input', () => {
    const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
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
    const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
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

Then('it is rendered on top of the SingleSelect', () => {
    const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
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

Then(
    'the left of the SingleSelect is aligned with the left of the anchor',
    () => {
        const selectDataTest = '[data-test="dhis2-uicore-singleselect"]'
        const menuDataTest =
            '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

        cy.getAll(selectDataTest, menuDataTest).should(([selects, menus]) => {
            expect(selects.length).to.equal(1)
            expect(menus.length).to.equal(1)

            const $select = selects[0]
            const $menu = menus[0]

            const selectRect = $select.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            expect(selectRect.left).to.equal(menuRect.left)
        })
    }
)
