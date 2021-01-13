import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an Alertbar with onHidden handler is rendered', () => {
    cy.visitStory('Alertbar', 'With onHidden')
})

When('the Alertbar is not rendered', () => {
    cy.wait(8000)
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('not.exist')
})

Then('the onHidden handler is called', () => {
    cy.window().should(win => {
        expect(win.onHidden).to.be.calledOnce
        expect(win.onHidden).to.be.calledWith({}, null)
    })
})
