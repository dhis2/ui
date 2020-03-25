import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given(
    'there is enough space to the right of the MenuItem to fit the SubMenu',
    () => {
        cy.visitStory('MenuItem', 'Default position')
    }
)

Given(
    'there is not enough space to the right of the MenuItem to fit the SubMenu',
    () => {
        cy.visitStory('MenuItem', 'Flipped position')
    }
)

Given(
    'there is not enough space to the right or the left of the MenuItem to fit the SubMenu',
    () => {
        cy.visitStory('MenuItem', 'Shift into view')
    }
)

When('the user hovers over the MenuItem', () => {
    cy.get('[data-test="dhis2-uicore-menuitem"]').trigger('mouseover')
})

Then(
    'the right of the MenuItem is aligned with the left of the SubMenu',
    () => {
        getMenuItemAndSubMenuRects().then(([menuItemRect, subMenuRect]) => {
            expect(menuItemRect.right).to.equal(subMenuRect.left)
        })
    }
)

Then(
    'the left of the MenuItem is aligned with the right of the SubMenu',
    () => {
        getMenuItemAndSubMenuRects().then(([menuItemRect, subMenuRect]) => {
            expect(menuItemRect.left).to.equal(subMenuRect.right)
        })
    }
)

Then('the SubMenu is rendered on top of the MenuItem', () => {
    getMenuItemAndSubMenuRects().then(([menuItemRect, subMenuRect]) => {
        expect(menuItemRect.right).to.be.greaterThan(subMenuRect.left)
        expect(subMenuRect.right).to.be.greaterThan(menuItemRect.right)
    })
})

Then(
    'the top of the MenuItem is aligned with the top of the SubMenu wrapper',
    () => {
        cy.getPositionsBySelectors(
            '[data-test="dhis2-uicore-menuitem"]',
            '[data-test="dhis2-uicore-popper"]'
        ).then(([menuItemRect, popperRect]) => {
            expect(menuItemRect.top).to.equal(popperRect.top)
        })
    }
)

function getMenuItemAndSubMenuRects() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-menuitem"]',
        '[data-test="submenu"]'
    )
}
