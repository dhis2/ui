import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import { TOOLTIP_OFFSET, TOOLTIP_HEIGHT } from '../common/constants.js'
import { getReferenceAndBodyPositions } from '../common/getReferenceAndBodyPositions.js'
import { getReferenceAndContentPositions } from '../common/getReferenceAndContentPositions.js'

// On my linux machine a tolerance of 1 wasn't enough :shrug:
const APPROXIMATION_TOLERANCE = 2

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
        getReferenceAndBodyPositions().should(([refPos, bodyPos]) => {
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
        getReferenceAndContentPositions().should(([refPos, contentPos]) => {
            const refCenterX = refPos.left + refPos.width / 2
            const contentCenterX = contentPos.left + contentPos.width / 2

            expect(refCenterX).to.be.approximately(
                contentCenterX,
                APPROXIMATION_TOLERANCE
            )
        })
    }
)

Then(
    'the horizontal center of the Tooltip is to the right of the horizontal center of the anchor',
    () => {
        getReferenceAndContentPositions().should(([refPos, contentPos]) => {
            const contentCenterX = contentPos.left + contentPos.width / 2
            const refCenterX = refPos.left + refPos.width / 2

            expect(contentCenterX).to.be.greaterThan(refCenterX)
        })
    }
)

Then(
    'there is some space between the anchor bottom and the Tooltip top',
    () => {
        getReferenceAndContentPositions().should(([refPos, contentPos]) => {
            expect(refPos.bottom + TOOLTIP_OFFSET).to.be.approximately(
                contentPos.top,
                APPROXIMATION_TOLERANCE
            )
        })
    }
)

Then(
    'there is some space between the anchor top and the Tooltip bottom',
    () => {
        getReferenceAndContentPositions().should(([refPos, contentPos]) => {
            expect(refPos.top).to.be.approximately(
                contentPos.bottom + TOOLTIP_OFFSET,
                APPROXIMATION_TOLERANCE
            )
        })
    }
)

Then('the Tooltip is rendered below the anchor', () => {
    getReferenceAndContentPositions().should(([refPos, contentPos]) => {
        expect(contentPos.top).to.be.approximately(
            refPos.bottom + TOOLTIP_OFFSET,
            APPROXIMATION_TOLERANCE
        )
    })
})
