import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

const CLOSE_TO_DELTA = 1

// Stories
Given(
    'there is sufficient space to place the Popover above the reference element',
    () => {
        cy.visitStory('Popover', 'Default')
    }
)

Given(
    'there is not enough space between the reference element top and the body top to fit the Popover',
    () => {
        cy.visitStory('Popover', 'Flipped')
    }
)

Given(
    'there is very little space between the top of the reference element and the top of the body',
    () => {
        cy.visitStory('Popover', 'Hidden Arrow')
    }
)

// Window height manipulation to control the space below the reference element
Given(
    'there is sufficient space between the reference element bottom and the body bottom to fit the Popover',
    () => {
        cy.viewport(1000, 660)
    }
)

Given(
    'there is not enough space between the reference element bottom and the body bottom to fit the Popover',
    () => {
        cy.viewport(1000, 325)
    }
)

Given(
    'there is not enough space between the top of the reference element and the top of the Popover to show the arrow',
    () => {
        cy.viewport(1000, 380)
    }
)

// Assertions
Given(
    'there is sufficient space between the bottom of the reference element and the bottom of the Popover to show the arrow',
    () => {
        compareRefAndPopoverPositions((refPos, popoverPos) => {
            expect(refPos.bottom).to.be.greaterThan(popoverPos.bottom + 8)
        })
    }
)

Then('the arrow is hiding', () => {
    cy.get('[data-test="dhis2-uicore-popoverarrow"]').should('not.be.visible')
})

Then('the arrow is showing', () => {
    cy.get('[data-test="dhis2-uicore-popoverarrow"]').should('be.visible')
})

Then(
    'the horizontal center of the popover is aligned with the horizontal center of the reference element',
    () => {
        compareRefAndPopoverPositions((refPos, popoverPos) => {
            const refCenter = refPos.left + refPos.width / 2
            const popoverCenter = popoverPos.left + popoverPos.width / 2
            expect(refCenter).to.be.closeTo(popoverCenter, CLOSE_TO_DELTA)
        })
    }
)

Then('the popover is placed above the reference element', () => {
    compareRefAndPopoverPositions((refPos, popoverPos) => {
        expect(refPos.top).to.be.greaterThan(popoverPos.bottom)
    })
})

Then('the popover is placed below the reference element', () => {
    compareRefAndPopoverPositions((refPos, popoverPos) => {
        expect(popoverPos.top).to.be.greaterThan(refPos.bottom)
    })
})

Then('the popover is placed op top of the reference element', () => {
    compareRefAndPopoverPositions((refPos, popoverPos) => {
        expect(popoverPos.bottom).to.be.greaterThan(refPos.top)
        expect(refPos.top).to.be.greaterThan(popoverPos.top)
    })
})

Then('there is some space between the anchor and the popover', () => {
    compareRefAndPopoverPositions((refPos, popoverPos) => {
        expect(popoverPos.bottom + 8).to.be.closeTo(refPos.top, CLOSE_TO_DELTA)
    })
})

// helper
const compareRefAndPopoverPositions = (callback) => {
    // this needs to be done as the cypress reference to the popover is lost
    // once react re-renders it to adjust to the changed viewport size,
    // which happens async
    cy.get('body').should(($body) => {
        const body = $body.get(0)
        const ref = body.querySelector('[data-test="reference-element"]')
        const popover = body.querySelector('[data-test="dhis2-uicore-popover"]')
        const refPos = ref.getBoundingClientRect()
        const popoverPos = popover.getBoundingClientRect()

        callback(refPos, popoverPos)
    })
}
