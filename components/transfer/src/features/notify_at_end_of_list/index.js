import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

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
    'the Transfer source options list does not fill the list completely',
    () => {
        cy.visitStory('Transfer End Of List', 'Option Changes For Short List')
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

When('the user adds an item by clicking the button', () => {
    cy.contains('Increment options lists').click()
})

Then('the last list item should be fully visible', () => {
    cy.contains('ARI treated with antibiotics (pneumonia) new').should(
        'be.visible'
    )
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
When('the user scrolls down to the source list end', () => {
    cy.get('[data-test="dhis2-uicore-transfer-sourceoptions"]')
        .find('[data-test="dhis2-uicore-intersectiondetector"]')
        .scrollIntoView()
})
Then('the list end indicator of the source list should be visible', () => {
    cy.get('[data-test="dhis2-uicore-transfer-sourceoptions"]')
        .find('[data-test="dhis2-uicore-intersectiondetector"]')
        .should('be.visible')
})
Then('the list end indicator of the source list should not be visible', () => {
    cy.get('[data-test="dhis2-uicore-transfer-sourceoptions"]')
        .find('[data-test="dhis2-uicore-intersectiondetector"]')
        .should('not.be.visible')
})
Then(
    'the callback for reaching the end of the source list should be called {int} times',
    function (int) {
        cy.window().should((win) => {
            expect(win.onEndReached).to.have.callCount(int)
        })
    }
)
Then('the selected item is being displayed in the picked list', () => {
    cy.get('[data-test="dhis2-uicore-transfer-pickedoptions"]')
        .contains('Option nr. 9')
        .should('be.visible')
})
When('the user selects option nr. {}', function (int) {
    cy.contains(`Option nr. ${int}`).dblclick()
})
Then(
    'the callback for reaching the end of the picked list should be called {int} times',
    function (int) {
        cy.window().should((win) => {
            expect(win.onEndReachedPicked).to.have.callCount(int)
        })
    }
)
