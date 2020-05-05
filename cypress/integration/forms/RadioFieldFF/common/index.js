import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a FieldGroupFF with required RadioFieldFFs and no selected value',
    () => {
        cy.visitStory('Testing:RadioFieldFF', 'Required and no selected value')
        cy.verifyFormValue('choice', undefined)
    }
)
