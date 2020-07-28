import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the detector is not intersecting with the root', () => {
    cy.visitStory('IntersectionDetector', 'Out Of View')
    cy.window().then(win => {
        cy.wrap(win.onChange)
            .as('onChangeStub')
            .should('be.calledOnce')
            .should('be.calledWith', { isIntersecting: false })
    })
})

Given('the detector is intersecting with the root', () => {
    cy.visitStory('IntersectionDetector', 'In View')
    cy.window().then(win => {
        cy.wrap(win.onChange)
            .as('onChangeStub')
            .should('be.calledOnce')
            .should('be.calledWith', { isIntersecting: true })
    })
})

When('the user scrolls the detector into view', () => {
    // using 311 to scroll 1px more than "just enough"
    cy.get('[data-test="scroll-container"]').scrollTo(0, 311)
})

When('the user scrolls the detector out of view', () => {
    // Scroll 1px more than "just enough" to make sure
    // the detector is completely hidden
    cy.get('[data-test="scroll-container"]').scrollTo(0, 201)
})

Then('the callback passed to onChange should be called', () => {
    cy.get('@onChangeStub').should(stub => {
        expect(stub).to.be.calledTwice
    })
})

Then('the isIntersecting prop of its payload should be true', () => {
    cy.get('@onChangeStub').should('be.calledWith', { isIntersecting: true })
})

Then('the isIntersecting prop of its payload should be false', () => {
    cy.get('@onChangeStub').should('be.calledWith', {
        isIntersecting: false,
    })
})
