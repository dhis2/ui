import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Layer with a button below it is rendered', () => {
    cy.visitStory('Layer', 'Blocking')
})

Given('a Layer with a button in it is rendered', () => {
    cy.visitStory('Layer', 'With Click Handler')
})

When('the user clicks the button', () => {
    cy.get('button').click()
})

When('the user clicks on the layer', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click()
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

Then('the onClick handler of the layer is called', () => {
    cy.window().should((win) => {
        expect(win.onLayerClick).to.be.calledOnce
    })
})

Then('the onClick handler of the button is not called', () => {
    cy.window().should((win) => {
        expect(win.onButtonClick).to.have.callCount(0)
    })
})

Then('the onClick handler of the layer is not called', () => {
    cy.window().should((win) => {
        expect(win.onLayerClick).to.have.callCount(0)
    })
})
