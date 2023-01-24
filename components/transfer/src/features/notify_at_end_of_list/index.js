import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Cypress.on('uncaught:exception', (err) => {
    // This prevents a benign error:
    //   This error means that ResizeObserver was not able to deliver all
    //   observations within a single animation frame. It is benign (your site
    //   will not break).
    //
    // Source: https://stackoverflow.com/a/50387233/1319140
    if (err.match(/ResizeObserver loop limit exceeded/)) {
        return false
    }
})

Given(
    'the Transfer has enough items to fill the source list completely',
    () => {
        cy.visitStory('Transfer End Of List', 'Full Source List')
        cy.wrap('source').as('listType')
    }
)

Given(
    'the Transfer has enough items to fill the picked list completely',
    () => {
        cy.visitStory('Transfer End Of List', 'Full Picked List')
        cy.wrap('picked').as('listType')
    }
)

Given(
    'the Transfer does not have enough items to fill the source list completely',
    () => {
        cy.visitStory('Transfer End Of List', 'Partial Source List')
        cy.wrap('source').as('listType')
    }
)

Given(
    'the Transfer does not have enough items to fill the picked list completely',
    () => {
        cy.visitStory('Transfer End Of List', 'Partial Picked List')
        cy.wrap('picked').as('listType')
    }
)

When('the user scroll to the end of the list', () => {
    cy.get('@listType').then((listType) => {
        const listSelector =
            listType === 'source'
                ? 'transfer-sourceoptions'
                : 'transfer-pickedoptions'

        cy.get(`{${listSelector}-endintersectiondetector}`).scrollIntoView()
    })
})

Then('the callback for reaching the end should not be called', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('@listType')
    ).should(([win, listType]) => {
        const callback =
            listType === 'source' ? win.onEndReached : win.onEndReachedPicked

        expect(callback).to.not.be.called
    })
})

Then('the callback for reaching the end should be called', () => {
    cy.all(
        () => cy.window(),
        () => cy.get('@listType')
    ).should(([win, listType]) => {
        const callback =
            listType === 'source' ? win.onEndReached : win.onEndReachedPicked

        expect(callback).to.be.calledOnce
    })
})
