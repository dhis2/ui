import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'a SingleSelect with a disabled option and onChange handler is rendered',
    () => {
        cy.visitStory('SingleSelect', 'With disabled option and onChange')
    }
)

Given(
    'a SingleSelect with custom options and onChange handler is rendered',
    () => {
        cy.visitStory('SingleSelect', 'With custom options and onChange')
    }
)

When('an option is clicked', () => {
    cy.contains('option one').click()
})

When('the disabled option is clicked', () => {
    cy.contains('disabled option').click()
})

Then('the clicked option is selected', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: '1',
        })
    })
})

Then('the onchange handler is not called', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.not.be.called
    })
})
