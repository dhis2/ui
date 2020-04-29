import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { extractOptionFromElement } from '../common'

Given('filtering is enabled', () => {
    // no op
})

Given('the options list is being filtered', () => {
    // no op
})

Given('the result is not empty', () => {
    cy.visitStory('Transfer filtering', 'Some Results')
})

Given('the result is empty', () => {
    cy.visitStory('Transfer filtering', 'Empty Result')
})

Given('a no-result message has been provided', () => {
    // no op
})

Given('the options are being search with a {string} search term', firstCase => {
    if (firstCase === 'uppercase') {
        cy.visitStory('Transfer filtering', 'Uppercase Search')
    } else if (firstCase === 'lowercase') {
        cy.visitStory('Transfer filtering', 'Lowercase Search')
    }

    cy.get('{transfer-filter} input')
        .then($input => $input.val())
        .as('firstCaseTerm')
})

Given('some options are listed', () => {
    cy.get('{transfer-sourceoptions} {transferoption}')
        .should('have.length.of.at.least', 1)
        .as('firstCaseOptions')
})

Given('the filter function only returns ANC options', () => {
    cy.visitStory('Transfer filtering', 'Anc Custom Filter')
})

Given("the filter value is controlled by the component's consumer", () => {
    cy.visitStory('Transfer filtering', 'Controlled Filter')
})

When('the user uses the same search term but {string}', secondCase => {
    cy.all(
        () => cy.get('@firstCaseTerm'),
        () => cy.get('{transfer-filter} input')
    ).then(([firstCaseTerm, $filterInput]) => {
        let secondCaseTerm

        if (secondCase === 'uppercase') {
            secondCaseTerm = firstCaseTerm.toUpperCase()
        } else if (secondCase === 'lowercase') {
            secondCaseTerm = firstCaseTerm.toLowerCase()
        }

        cy.wrap($filterInput)
            .clear()
            .type(secondCaseTerm)
    })
})

When('searching for "s"', () => {
    cy.get('{transfer-filter} input').type('s')
})

When('the filter value changes', () => {
    cy.get('{transfer-filter} input')
        .then($input => console.log('$input', $input) || $input)
        .type('ANC')
})

Then('all the matching items should be shown in the options list', () => {
    cy.all(
        () => cy.get('{transfer-filter}'),
        () => cy.get('{transferoption}')
    ).then(([$filter, $options]) => {
        const searchTerm = $filter.val()

        expect($options).to.have.length.of.at.least(1)
        $options.each((index, option) => {
            const text = Cypress.$(option).text()
            expect(text).to.match(new RegExp(searchTerm))
        })
    })
})

Then('no items should be shown in the options list', () => {
    cy.get('{transferoption}').should('not.exist')
})

Then('information should be displayed that no items matched the filter', () => {
    cy.get('{no-results}', { prefix: '' }).should('exist')
})

Then('the same options should be shown', () => {
    cy.all(
        () => cy.get('@firstCaseOptions'),
        () => cy.get('{transfer-sourceoptions} {transferoption}')
    ).then(([$firstCaseOptions, $secondCaseOptions]) => {
        const firstCaseOptions = $firstCaseOptions
            .toArray()
            .map(extractOptionFromElement)
        const secondCaseOptions = $secondCaseOptions
            .toArray()
            .map(extractOptionFromElement)

        expect(firstCaseOptions).to.eql(secondCaseOptions)
    })
})

Then('only the results including the word "ANC" are included', () => {
    cy.get('{transfer-sourceoptions} {transferoption}').each($option =>
        expect($option.text()).to.match(/ANC/)
    )
})

Then('the onFilterChange callback will be called with the new value', () => {
    cy.window().then(win => {
        expect(win.customFilterCallback.callCount).to.equal(4)
        expect(win.customFilterCallback.getCall(0).args[1]).to.equal('')
        expect(win.customFilterCallback.getCall(1).args[1]).to.equal('A')
        expect(win.customFilterCallback.getCall(2).args[1]).to.equal('AN')
        expect(win.customFilterCallback.getCall(3).args[1]).to.equal('ANC')
    })
})
