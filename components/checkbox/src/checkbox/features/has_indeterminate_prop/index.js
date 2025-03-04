import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the checkbox is marked as indeterminate', () => {
    cy.visitStory('Checkbox', 'Indeterminate prop')
})

Given('the checkbox is not marked as indeterminate', () => {
    cy.visitStory('Checkbox', 'No indeterminate prop')
})

Then("its input-element's indeterminate prop is {word}", (bool) => {
    cy.get('input').should(($input) => {
        if (bool === 'true') {
            expect($input[0].indeterminate).to.be.true
        } else {
            expect($input[0].indeterminate).to.be.false
        }
    })
})
