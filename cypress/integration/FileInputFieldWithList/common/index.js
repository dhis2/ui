import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileInputFieldWithList with multiple files is rendered', () => {
    cy.visitStory('FileInputFieldWithList', 'Multiple files - with files')
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
