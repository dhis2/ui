require('../common/index.js')
import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the files are displayed in a list', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem"] .label')
        .then(($labels) => $labels.map((_, el) => el.innerHTML).toArray())
        .should('deep.equal', ['test1.md', 'duplicate.md', 'test2.md'])
})
