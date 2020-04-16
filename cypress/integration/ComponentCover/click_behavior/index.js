import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a ComponentCover with pointerEvents none and a button below it is rendered',
    () => {
        cy.visitStory('ComponentCover', 'Non Blocking')
    }
)

Given('a ComponentCover with a button below it is rendered', () => {
    cy.visitStory('ComponentCover', 'Blocking')
})

Given('a ComponentCover with a button in it is rendered', () => {
    cy.visitStory('ComponentCover', 'With Click Handler')
})

When('the user clicks the button', () => {
    cy.get('button').click()
})

When('the user clicks on the ComponentCover', () => {
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
    cy.window().then(win => {
        expect(win.onButtonClick).to.be.calledOnce
    })
})

Then('the onClick handler of the ComponentCover is called', () => {
    cy.window().then(win => {
        expect(win.onComponentCoverClick).to.be.calledOnce
    })
})

Then('the onClick handler of the button is not called', () => {
    cy.window().then(win => {
        expect(win.onButtonClick).to.have.callCount(0)
    })
})

Then('the onClick handler of the ComponentCover is not called', () => {
    cy.window().then(win => {
        expect(win.onComponentCoverClick).to.have.callCount(0)
    })
})
