import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a clearable MultiSelect with a selection and onchange handler is rendered',
    () => {
        cy.visitStory(
            'MultiSelect',
            'With clear button, selection and onChange'
        )
    }
)

When('the clear button is clicked', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-clear"]').click()
})

Then('the MultiSelect is cleared', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({ selected: [] })
    })
})
