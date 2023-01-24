import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('two equal sibling Layers are rendered', () => {
    cy.visitStory('Layer', 'Equal Siblings')
})

Given(
    'an alert, blocking, and applicatioTop Layer are rendered as siblings',
    () => {
        cy.visitStory('Layer', 'Inequal Siblings')
    }
)

Given('a blocking layer is rendered as the child of an alert layer', () => {
    cy.visitStory('Layer', 'Nested Lower Levels')
})

Given('an alert layer is rendered as the child of a blocking layer', () => {
    cy.visitStory('Layer', 'Nested Higher Levels')
})

Given(
    'a layer with level 1001 is a sibling of 3 nested layers with level 1000',
    () => {
        cy.visitStory('Layer', 'Levels Are Respected When Nesting')
    }
)

Given(
    'an applicatioTop layer with a nested alert layer with a blocking sibling',
    () => {
        cy.visitStory('Layer', 'Nested Higher Level Ends On Top')
    }
)

Then('the second layer is on top of the first layer', () => {
    cy.get('body').click()
    cy.window().should((win) => {
        expect(win.onLayerClick).to.be.calledOnce
        expect(win.onLayerClick).to.be.calledWith('second')
    })
})

Then('the alert layer is on top', () => {
    cy.get('body').click()
    cy.window().should((win) => {
        expect(win.onLayerClick).to.be.calledOnce
        expect(win.onLayerClick).to.be.calledWith('alert')
    })
})

Then('the layer with level 1001 is on top', () => {
    cy.get('body').click()
    cy.window().should((win) => {
        expect(win.onLayerClick).to.be.calledOnce
        expect(win.onLayerClick).to.be.calledWith('1001')
    })
})

Then('the blocking layer is on top', () => {
    cy.get('body').click()
    cy.window().should((win) => {
        expect(win.onLayerClick).to.be.calledOnce
        expect(win.onLayerClick).to.be.calledWith('blocking')
    })
})

Then('the blocking layer is a child of the alert layer', () => {
    cy.get('[data-test="blocking"]')
        .parent()
        .should('have.data', 'test', 'alert')
})

Then('the alert layer is a sibling of the blocking layer', () => {
    cy.get('[data-test="blocking"]').next().should('have.data', 'test', 'alert')
})
