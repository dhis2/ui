import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FlyoutMenu with two SubMenus is rendered', () => {
    cy.visitStory('FlyoutMenu', 'Toggles Sub Menus')
    cy.get('[data-test="dhis2-uicore-menu"]').should('be.visible')
})

When('the user clicks the first SubMenu anchor', () => {
    cy.contains('Item 1').click()
})

Then('first SubMenu is visible', () => {
    cy.contains('SubMenu 1').should('be.visible')
})

When('the user clicks the second SubMenu anchor', () => {
    cy.contains('Item 2').click()
})

Then('second SubMenu is visible', () => {
    cy.contains('SubMenu 2').should('be.visible')
})

Then('the first SubMenu is not rendered', () => {
    cy.contains('SubMenu 1').should('not.exist')
})
