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
    // This test is used by the window scroll scenario
    // so needs to take y into account for the anchor
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(menuRect.top).to.equal(anchorRect.bottom - anchorRect.y)
    })
})

Then('the bottom of the menu is aligned with the top of the input', () => {
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(anchorRect.top).to.equal(menuRect.bottom)
    })
})

Then('it is rendered on top of the SingleSelect', () => {
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(anchorRect.top).to.be.greaterThan(menuRect.top)
        expect(menuRect.bottom).to.be.greaterThan(anchorRect.bottom)
    })
})

Then(
    'the left of the SingleSelect is aligned with the left of the anchor',
    () => {
        getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
            expect(anchorRect.left).to.equal(menuRect.left)
        })
    }
)

function getAnchorAndMenuRects() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-singleselect"]',
        '[data-test="dhis2-uicore-select-menu-menuwrapper"]'
    )
}
