import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an Islamic calendar is rendered with Arabic locale', () => {
    cy.visitStory('CalendarInputTesting', `Islamic With Arabic`)
    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"]').click()
    cy.get('[data-test=calendar]').should('be.visible')
})

Then('days should be rendered in Arabic', () => {
    cy.contains('الأحد').should('be.visible')
    cy.contains('السبت').should('be.visible')
    cy.contains('الجمعة').should('be.visible')
    cy.contains('الخميس').should('be.visible')
    cy.contains('الأربعاء').should('be.visible')
    cy.contains('الثلاثاء').should('be.visible')
    cy.contains('الاثنين').should('be.visible')
})
