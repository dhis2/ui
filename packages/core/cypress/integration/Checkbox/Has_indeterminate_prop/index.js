import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the checkbox is marked as indeterminate', () => {
    cy.visitStory('Checkbox', 'Indeterminate prop')
})

Given('the checkbox is not marked as indeterminate', () => {
    cy.visitStory('Checkbox', 'No indeterminate prop')
})

Then("its input-element's indeterminate prop is {word}", bool => {
    cy.get('input').then($input => {
        if (bool === 'true') {
            expect($input[0].indeterminate).to.be.true
        } else {
            expect($input[0].indeterminate).to.be.false
        }
    })
})
