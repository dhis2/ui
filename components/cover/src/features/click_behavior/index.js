import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Cover with a button below it is rendered', () => {
    cy.visitStory('Cover', 'Blocking')
})

Given('a Cover with a button in it is rendered', () => {
    cy.visitStory('Cover', 'With Click Handler')
})

When('the user clicks the button', () => {
    cy.get('button').click()
})

When('the user clicks on the Cover', () => {
    cy.get('[data-test="dhis2-uicore-componentcover"]').click()
})

When('the user clicks on the button coordinates', () => {
    cy.getPositionsBySelectors('button').then(([rect]) => {
        // Get button center coordinates
        const buttonCenterX = rect.left + rect.width / 2
        const buttonCenterY = rect.top + rect.height / 2

        // click body on the button center
        cy.get('body').click(buttonCenterX, buttonCenterY)
    })
})

Then('the onClick handler of the button is called', () => {
    cy.window().should((win) => {
        expect(win.onButtonClick).to.be.calledOnce
    })
})

Then('the onClick handler of the Cover is called', () => {
    cy.window().should((win) => {
        expect(win.onCover).to.be.calledOnce
    })
})

Then('the onClick handler of the button is not called', () => {
    cy.window().should((win) => {
        expect(win.onButtonClick).to.have.callCount(0)
    })
})

Then('the onClick handler of the Cover is not called', () => {
    cy.window().should((win) => {
        expect(win.onCover).to.have.callCount(0)
    })
})
