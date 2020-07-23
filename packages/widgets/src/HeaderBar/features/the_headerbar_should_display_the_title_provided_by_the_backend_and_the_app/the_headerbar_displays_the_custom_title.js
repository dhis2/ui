import { baseUrl } from '../common/index'
import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given(
    'the custom title is {string} and the app title is "Example!"',
    applicationTitle => {
        cy.get('@applicationTitleFixture').then(fx => {
            cy.route({
                url: `${baseUrl}api/systemSettings/applicationTitle`,
                response: { ...fx, applicationTitle },
            }).as('applicationTitle')
        })
    }
)

Then('the displayed title should be "Barbaz - Example!"', () => {
    cy.get('[data-test="headerbar-title"]').should($title => {
        expect($title.text()).to.equal('Barbaz - Example!')
    })
})
