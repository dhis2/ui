import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelect with hidden sibling elements', () => {
    cy.visitStory('MultiSelect', 'Menu width changing')
    cy.get('[data-test="dhis2-uicore-multiselect"]').then(($el) => {
        cy.wrap($el.outerWidth()).as('originalWidth')
    })
})
When('the button is clicked', () => {
    cy.get('button').click()
})
Then('the siblings are displayed', () => {
    cy.get('.toggler').should('exist').and('have.length', 2)
})
Then('the menu width has decreased', () => {
    cy.get('[data-test="dhis2-uicore-multiselect"]').then(($el) => {
        const newWidth = $el.outerWidth()
        cy.get('@originalWidth').should('be.greaterThan', newWidth)
    })
})
When('the MultiSelect menu is open', () => {
    cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
        'be.visible'
    )
})
Then('the MultiSelect input is left aligned with the menu', () => {
    const selectDataTest = '[data-test="dhis2-uicore-multiselect"]'
    const menuDataTest = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(selectDataTest, menuDataTest).should(([inputs, menus]) => {
        expect(inputs.length).to.equal(1)
        expect(menus.length).to.equal(1)

        const $input = inputs[0]
        const $menu = menus[0]

        const inputRect = $input.getBoundingClientRect()
        const menuRect = $menu.getBoundingClientRect()

        expect(Math.round(inputRect.left)).to.equal(Math.round(menuRect.left))
    })
})
When('the MultiSelect input and menu have the same width', () => {
    const inputSelector = '[data-test="dhis2-uicore-select"]'
    const menuSelector = '[data-test="dhis2-uicore-select-menu-menuwrapper"]'

    cy.getAll(inputSelector, menuSelector).should(([$input, $menu]) => {
        const inputWidth = Math.round($input.outerWidth())
        const menuWidth = Math.round($menu.outerWidth())

        expect(inputWidth).to.equal(menuWidth)
    })
})
