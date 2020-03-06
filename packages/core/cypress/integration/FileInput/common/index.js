import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the FileInput does not have any files', () => {
    cy.get('[data-test="dhis2-uicore-fileinput"] input').then($input => {
        const files = $input[0].files
        expect(files).to.have.lengthOf(0)
    })
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        const calls = win.onChange.getCalls()
        expect(calls).to.have.lengthOf(1)

        const callArgs = calls[0].args
        expect(callArgs).to.have.lengthOf(2)

        const payload = callArgs[0]
        expect(Object.keys(payload)).to.include.members(['files', 'name'])

        cy.wrap(payload).as('payload')
    })
})
