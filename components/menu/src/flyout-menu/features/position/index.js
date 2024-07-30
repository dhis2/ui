import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

const CLOSE_TO_DELTA = 1

Given(
    'there is enough space to the right of the MenuItem to fit the SubMenu',
    () => {
        cy.visitStory('FlyoutMenu', 'Default Position')
    }
)

Given(
    'there is not enough space to the right of the MenuItem to fit the SubMenu',
    () => {
        cy.visitStory('FlyoutMenu', 'Flipped Position')
    }
)

Given(
    'there is not enough space to the right or the left of the MenuItem to fit the SubMenu',
    () => {
        cy.visitStory('FlyoutMenu', 'Shift Into View')
    }
)

When('the user clicks on the MenuItem', () => {
    cy.get('[data-test="dhis2-uicore-menuitem"]').click()
})

Then(
    'the right of the MenuItem is aligned with the left of the SubMenu',
    () => {
        getMenuItemAndSubMenuRects().should(([menuItemRect, subMenuRect]) => {
            expect(menuItemRect.right).to.closeTo(
                subMenuRect.left,
                CLOSE_TO_DELTA
            )
        })
    }
)

Then(
    'the left of the MenuItem is aligned with the right of the SubMenu',
    () => {
        getMenuItemAndSubMenuRects().should(([menuItemRect, subMenuRect]) => {
            expect(menuItemRect.left).to.closeTo(
                subMenuRect.right,
                CLOSE_TO_DELTA
            )
        })
    }
)

Then('the SubMenu is rendered on top of the MenuItem', () => {
    getMenuItemAndSubMenuRects().should(([menuItemRect, subMenuRect]) => {
        expect(subMenuRect.left).to.be.at.most(menuItemRect.right)
        expect(subMenuRect.right).to.be.at.least(menuItemRect.left)
        expect(subMenuRect.top).to.be.at.most(menuItemRect.bottom)
        expect(subMenuRect.bottom).to.be.at.least(menuItemRect.top)
    })
})

Then(
    'the top of the MenuItem is aligned with the top of the SubMenu wrapper',
    () => {
        cy.getPositionsBySelectors(
            '[data-test="dhis2-uicore-menuitem"]',
            '[data-test="dhis2-uicore-popper"]'
        ).should(([menuItemRect, popperRect]) => {
            expect(menuItemRect.top).to.closeTo(popperRect.top, CLOSE_TO_DELTA)
        })
    }
)

function getMenuItemAndSubMenuRects() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-menuitem"]',
        '[data-test="dhis2-uicore-popper"]'
    )
}
