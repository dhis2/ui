import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const expectStubPayloadToEqual = (stub, prop, expected) => {
    const calls = stub.getCalls()
    const { args } = calls[calls.length - 1]
    const [payload] = args
    expect(payload[prop]).to.eql(expected)
}

Given('an OrganisationUnitTree is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Events')
    cy.getOrgUnitByLabel('Org Unit 1').shouldBeDoneLoading()
})

Given('a node has been selected', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(true)
})

Given('a node with children is rendered', () => {
    cy.visitStory('OrganisationUnitTree', 'Events')
})

Given('the node has been expanded', () => {
    cy.getOrgUnitByLabel('Org Unit 1').openOrgUnitNode()
})

Given("the children haven't been loaded yet", () => {
    cy.window().should((win) => {
        expect(win.onExpand).not.to.be.called
    })
})

When('a node gets selected', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(true)
})

When('a node gets deselected', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNodeSelection(false)
})

When('the node is expanded', () => {
    cy.getOrgUnitByLabel('Org Unit 1').openOrgUnitNode()
})

When('a node is collapsed', () => {
    cy.getOrgUnitByLabel('Org Unit 1').closeOrgUnitNode()
})

When('the children have been loaded', () => {
    cy.getOrgUnitByLabel('Org Unit 1').toggleOrgUnitNode(true)
})

Then('the onChange callback gets called', () => {
    cy.window().should((win) => {
        expect(win.onChange).to.be.called
    })
})

Then('the payload includes the path of the selected node', () => {
    cy.window().should((win) => {
        expectStubPayloadToEqual(win.onChange, 'path', '/A0000000000')
    })
})

Then('the payload includes checked which is set to "true"', () => {
    cy.window().should((win) => {
        expectStubPayloadToEqual(win.onChange, 'checked', true)
    })
})

Then('the payload includes all selected nodes', () => {
    cy.window().should((win) => {
        expectStubPayloadToEqual(win.onChange, 'selected', ['/A0000000000'])
    })
})

Then('the payload includes checked which is set to "false"', () => {
    cy.window().should((win) => {
        expectStubPayloadToEqual(win.onChange, 'checked', false)
    })
})

Then('the onExpand callback gets called', () => {
    cy.window().should((win) => {
        expect(win.onExpand).to.be.called
    })
})

Then('the payload includes the path of the expanded node', () => {
    cy.window().should((win) => {
        expectStubPayloadToEqual(win.onExpand, 'path', '/A0000000000')
    })
})

Then('the onCollapse callback gets called', () => {
    cy.window().should((win) => {
        expect(win.onCollapse).to.be.called
    })
})

Then('the payload includes the path of the collapsed node', () => {
    cy.window().should((win) => {
        expectStubPayloadToEqual(win.onCollapse, 'path', '/A0000000000')
    })
})

Then('the onChildrenLoaded callback gets called', () => {
    cy.window().should((win) => {
        expect(win.onChildrenLoaded).to.be.called
    })
})

Then("the payload contains the loaded children's data", () => {
    cy.window().should((win) => {
        const calls = win.onChildrenLoaded.getCalls()
        expect(calls).to.have.length(1)

        const [{ args }] = calls
        expect(args[0].id).to.equal('A0000000000')
    })
})
