import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

// Visit stories with different placements
Given('the Popper is rendered with placement top', () => {
    cy.visitStory('Popper', 'top')
})
Given('the Popper is rendered with placement top-start', () => {
    cy.visitStory('Popper', 'top-start')
})
Given('the Popper is rendered with placement top-end', () => {
    cy.visitStory('Popper', 'top-end')
})
Given('the Popper is rendered with placement right', () => {
    cy.visitStory('Popper', 'right')
})
Given('the Popper is rendered with placement right-start', () => {
    cy.visitStory('Popper', 'right-start')
})
Given('the Popper is rendered with placement right-end', () => {
    cy.visitStory('Popper', 'right-end')
})
Given('the Popper is rendered with placement bottom', () => {
    cy.visitStory('Popper', 'bottom')
})
Given('the Popper is rendered with placement bottom-start', () => {
    cy.visitStory('Popper', 'bottom-start')
})
Given('the Popper is rendered with placement bottom-end', () => {
    cy.visitStory('Popper', 'bottom-end')
})
Given('the Popper is rendered with placement left', () => {
    cy.visitStory('Popper', 'left')
})
Given('the Popper is rendered with placement left-start', () => {
    cy.visitStory('Popper', 'left-start')
})
Given('the Popper is rendered with placement left-end', () => {
    cy.visitStory('Popper', 'left-end')
})

// Directional assertions
// top
Then(
    'the bottom of the popper is adjacent to the top of the reference element',
    () => {
        getRefAndPopperPositions().then(([refPos, popperPos]) => {
            expect(refPos.top).to.equal(popperPos.bottom)
        })
    }
)
// right
Then(
    'the left of the popper is adjacent to the right of the reference element',
    () => {
        getRefAndPopperPositions().then(([refPos, popperPos]) => {
            expect(refPos.right).to.equal(popperPos.left)
        })
    }
)
// bottom
Then(
    'the top of the popper is adjacent to the bottom of the reference element',
    () => {
        getRefAndPopperPositions().then(([refPos, popperPos]) => {
            expect(refPos.bottom).to.equal(popperPos.top)
        })
    }
)
// left
Then(
    'the right of the popper is adjacent to the left of the reference element',
    () => {
        getRefAndPopperPositions().then(([refPos, popperPos]) => {
            expect(refPos.left).to.equal(popperPos.right)
        })
    }
)

// Horizontal alignments
// *-start
Then('it is horizontally left aligned with the reference element', () => {
    getRefAndPopperPositions().then(([refPos, popperPos]) => {
        expect(refPos.left).to.equal(popperPos.left)
    })
})
// * (no suffix)
Then('it is horizontally center aligned with the reference element', () => {
    getRefAndPopperPositions().then(([refPos, popperPos]) => {
        const refCenterX = refPos.left + refPos.width / 2
        const popperCenterX = popperPos.left + popperPos.width / 2

        expect(refCenterX).to.equal(popperCenterX)
    })
})
// *-end
Then('it is horizontally right aligned with the reference element', () => {
    getRefAndPopperPositions().then(([refPos, popperPos]) => {
        expect(refPos.right).to.equal(popperPos.right)
    })
})

// Vertical alignments
// *-start
Then('it is vertically top aligned with the reference element', () => {
    getRefAndPopperPositions().then(([refPos, popperPos]) => {
        expect(refPos.top).to.equal(popperPos.top)
    })
})
// * (no suffix)
Then('it is vertically center aligned with the reference element', () => {
    getRefAndPopperPositions().then(([refPos, popperPos]) => {
        const refCenterY = refPos.top + refPos.height / 2
        const popperCenterY = popperPos.top + popperPos.height / 2

        expect(refCenterY).to.equal(popperCenterY)
    })
})
// *-end
Then('it is vertically bottom aligned with the reference element', () => {
    getRefAndPopperPositions().then(([refPos, popperPos]) => {
        expect(refPos.bottom).to.equal(popperPos.bottom)
    })
})

// helper
function getRefAndPopperPositions() {
    return cy.getPositionsBySelectors(
        '.reference-element',
        '[data-test="dhis2-uicore-popper"]'
    )
}
