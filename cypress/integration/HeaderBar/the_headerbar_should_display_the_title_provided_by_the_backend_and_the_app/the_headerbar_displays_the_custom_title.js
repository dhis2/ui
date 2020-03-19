import '../common/index'
import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given(
    'the custom title is {string} and the app title is "Example!"',
    systemName => {
        cy.fixture('HeaderBar/systemInfo')
            .then(response => ({
                ...response,
                systemName,
            }))
            .as('systemInfoFixture')
    }
)

Then('the displayed title should be "Barbaz - Example!"', () => {
    cy.get('[data-test="headerbar-title"]').then($title => {
        expect($title.text()).to.equal('Barbaz - Example!')
    })
})
