import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a CssVariables component with colors flag is rendered', () => {
    cy.visitStory('CssVariables', 'With colors')
})

Given('a CssVariables component with theme flag is rendered', () => {
    cy.visitStory('CssVariables', 'With theme')
})

Given('a CssVariables component with layers flag is rendered', () => {
    cy.visitStory('CssVariables', 'With layers')
})

Given('a CssVariables component with spacers flag is rendered', () => {
    cy.visitStory('CssVariables', 'With spacers')
})

Given('a CssVariables component with elevations flag is rendered', () => {
    cy.visitStory('CssVariables', 'With elevations')
})

Then('the colors css variables are set', () => {
    cy.get('div#custom').should(
        'have.css',
        'background-color',
        'rgb(9, 51, 113)'
    )
})

Then('the theme css variables are set', () => {
    cy.get('div#custom').should(
        'have.css',
        'background-color',
        'rgb(9, 51, 113)'
    )
})

Then('the layers css variables are set', () => {
    cy.get('div#custom').should('have.css', 'z-index', '9999')
})

Then('the spacers css variables are set', () => {
    cy.get('div#custom').should('have.css', 'margin', '4px')
})

Then('the elevations css variables are set', () => {
    cy.get('div#custom').should(
        'have.css',
        'box-shadow',
        'rgba(33, 41, 52, 0.06) 0px 1px 2px 0px, rgba(33, 41, 52, 0.1) 0px 1px 3px 0px'
    )
})
