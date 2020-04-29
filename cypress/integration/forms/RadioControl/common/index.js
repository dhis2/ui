import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a GroupControl with required RadioControls and no selected value',
    () => {
        cy.visitStory('Testing:RadioControl', 'Required and no selected value')
        cy.verifyFormValue('choice', undefined)
    }
)
