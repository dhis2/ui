import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a clearable SingleSelect with a selection and onchange handler is rendered',
    () => {
        cy.visitStory(
            'SingleSelect',
            'With clear button, selection and onChange'
        )
    }
)

When('the clear button is clicked', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-clear"]').click()
})

Then('the SingleSelect is cleared', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({ selected: {} })
    })
})
