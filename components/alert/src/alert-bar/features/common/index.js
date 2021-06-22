import { When, Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default AlertBar is rendered', () => {
    cy.visitStory('AlertBar', 'Default')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Given('the AlertBar is rendered', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('exist')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Then('the AlertBar is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('not.exist')
})

When('the default duration has passed', () => {
    cy.wait(8000)
})

Then('the onHidden handler is called', () => {
    cy.window().should(win => {
        expect(win.onHidden).to.be.calledOnce
        expect(win.onHidden).to.be.calledWith({}, null)
    })
})
