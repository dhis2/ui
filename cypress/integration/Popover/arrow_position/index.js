import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Popover is rendered with placement top', () => {
    cy.visitStory('Popover', 'Placement Top')
})
Given('a Popover is rendered with placement right', () => {
    cy.visitStory('Popover', 'Placement Right')
})
Given('a Popover is rendered with placement bottom', () => {
    cy.visitStory('Popover', 'Placement Bottom')
})
Given('a Popover is rendered with placement left', () => {
    cy.visitStory('Popover', 'Placement Left')
})
Given('a Popover with position left is shifted into view', () => {
    cy.visitStory('Popover', 'Shifted Arrow')
})

Then('the Arrow is horizontally aligned with the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const popoverCenterX = popoverRect.left + popoverRect.width / 2
        const arrowCenterX = arrowRect.left + arrowRect.width / 2

        expect(popoverCenterX).to.equal(arrowCenterX)
    })
})
Then('the Arrow is vertically aligned with the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const popoverCenterY = popoverRect.top + popoverRect.height / 2
        const arrowCenterY = arrowRect.top + arrowRect.height / 2

        expect(popoverCenterY).to.equal(arrowCenterY)
    })
})

Then('the Arrow is vertically aligned with the reference element', () => {
    cy.all(
        () => cy.get('[data-test="reference-element"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$reference, $arrow]) => {
        const referenceRect = $reference.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const referenceCenterY = referenceRect.top + referenceRect.height / 2
        const arrowCenterY = arrowRect.top + arrowRect.height / 2

        expect(referenceCenterY).to.equal(arrowCenterY)
    })
})

Then('the Arrow is at the bottom of the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const arrowCenterY = arrowRect.top + arrowRect.height / 2

        expect(popoverRect.bottom).to.equal(arrowCenterY)
    })
})
Then('the Arrow is at the left of the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const arrowCenterX = arrowRect.left + arrowRect.width / 2

        expect(popoverRect.left).to.equal(arrowCenterX)
    })
})
Then('the Arrow is at the top of the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const arrowCenterY = arrowRect.top + arrowRect.height / 2

        expect(popoverRect.top).to.equal(arrowCenterY)
    })
})
Then('the Arrow is at the right of the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const arrowCenterX = arrowRect.left + arrowRect.width / 2

        expect(popoverRect.right).to.equal(arrowCenterX)
    })
})

Then('the Arrow is at the top half of the Popper', () => {
    cy.all(
        () => cy.get('[data-test="dhis2-uicore-popover"]'),
        () => cy.get('[data-test="dhis2-uicore-popoverarrow"]')
    ).should(([$popover, $arrow]) => {
        const popoverRect = $popover.get(0).getBoundingClientRect()
        const arrowRect = $arrow.get(0).getBoundingClientRect()
        const popoverCenterY = popoverRect.top + popoverRect.height / 2
        const arrowCenterY = arrowRect.top + arrowRect.height / 2

        expect(popoverCenterY).to.greaterThan(arrowCenterY)
    })
})
