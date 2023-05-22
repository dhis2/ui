import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FlyoutMenu with two SubMenus is rendered', () => {
    cy.visitStory('FlyoutMenu', 'Toggles Sub Menus On Hover')
    cy.get('[data-test="dhis2-uicore-menu"]').should('be.visible')
})

When('the user hovers the first SubMenu anchor', () => {
    cy.contains('Item 1').trigger('mouseover')
})

Then('first SubMenu is visible', () => {
    cy.contains('SubMenu 1').should('be.visible')
})

When('the user hovers the second SubMenu anchor', () => {
    cy.contains('Item 2').trigger('mouseover')
})

Then('second SubMenu is visible', () => {
    cy.contains('SubMenu 2').should('be.visible')
})

Then('the first SubMenu is not rendered', () => {
    cy.contains('SubMenu 1').should('not.exist')
})
