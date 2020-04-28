import '../common/index.js'
import '../../common/submit.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../../packages/forms/src/validators/hasValue.js'

Then('an error message is shown', () => {
    cy.get('[data-test="dhis2-uicore-togglegroupfield-validation"]').should(
        'contain',
        hasValueMessage
    )
})
