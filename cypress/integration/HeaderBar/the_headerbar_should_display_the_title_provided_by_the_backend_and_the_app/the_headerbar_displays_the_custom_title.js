import '../common/index'
import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given(
    'the custom title is {string} and the app title is "Example!"',
    applicationTitle => {
        cy.fixture('HeaderBar/applicationTitle')
            .then(response => ({
                ...response,
                applicationTitle,
            }))
            .as('applicationTitleFixture')
    }
)

Then('the displayed title should be "Barbaz - Example!"', () => {
    cy.get('[data-test="headerbar-title"]').should($title => {
        expect($title.text()).to.equal('Barbaz - Example!')
    })
})
