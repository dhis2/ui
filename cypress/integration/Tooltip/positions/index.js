import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

const TOOLTIP_OFFSET = 4
const TOOLTIP_HEIGHT = 28

// Stories
Given(
    'there is not enough space between the reference element top and the body top to fit the Tooltip',
    () => {
        cy.visitStory('Tooltip', 'Flipped Vertically')
    }
)
Given(
    'there is enough space between the anchor bottom and the body bottom to fit the Tooltip',
    () => {
        getReferenceAndBodyPositions().then(([refPos, bodyPos]) => {
            expect(bodyPos.bottom).to.be.greaterThan(
                refPos.bottom + TOOLTIP_OFFSET + TOOLTIP_HEIGHT
            )
        })
    }
)

Given('there is limited space available to the left of the anchor', () => {
    cy.visitStory('Tooltip', 'Adjusted Horizontal Position')
})

Then(
    'the horizontal center of the Tooltip is aligned with the horizontal center of the anchor',
    () => {
        getReferenceAndContentPositions().then(([refPos, contentPos]) => {
            const refCenterX = refPos.left + refPos.width / 2
            const contentCenterX = contentPos.left + contentPos.width / 2

            expect(refCenterX).to.be.approximately(contentCenterX, 0.5)
        })
    }
)

Then(
    'the horizontal center of the Tooltip is to the right of the horizontal center of the anchor',
    () => {
        getReferenceAndContentPositions().then(([refPos, contentPos]) => {
            const contentCenterX = contentPos.left + contentPos.width / 2
            const refCenterX = refPos.left + refPos.width / 2

            expect(contentCenterX).to.be.greaterThan(refCenterX)
        })
    }
)

Then(
    'there is some space between the anchor bottom and the Tooltip top',
    () => {
        getReferenceAndContentPositions().then(([refPos, contentPos]) => {
            expect(refPos.bottom + TOOLTIP_OFFSET).to.equal(contentPos.top)
        })
    }
)

Then(
    'there is some space between the anchor top and the Tooltip bottom',
    () => {
        getReferenceAndContentPositions().then(([refPos, contentPos]) => {
            expect(refPos.top).to.equal(contentPos.bottom + TOOLTIP_OFFSET)
        })
    }
)

Then('the Tooltip is rendered below the anchor', () => {
    getReferenceAndContentPositions().then(([refPos, contentPos]) => {
        expect(contentPos.top).to.be.greaterThan(refPos.bottom)
    })
})

// helper
function getReferenceAndBodyPositions() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-tooltip-reference"]',
        'body'
    )
}
function getReferenceAndContentPositions() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-tooltip-reference"]',
        '[data-test="dhis2-uicore-tooltip-content"]'
    )
}
