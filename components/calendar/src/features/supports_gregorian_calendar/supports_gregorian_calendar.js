import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Gregorian calendar is rendered in {word}', (language) => {
    cy.visitStory('CalendarInputTesting', `Gregorian With ${language}`)

    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"]').click()
    cy.get('[data-test=calendar]').should('be.visible')
})

Then('days should be rendered in "{word}"', (language) => {
    const days =
        language === 'arabic'
            ? [
                  'الاثنين',
                  'الثلاثاء',
                  'الأربعاء',
                  'الخميس',
                  'الجمعة',
                  'السبت',
                  'الأحد',
              ]
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    days.forEach((day) => {
        cy.contains(day).should('be.visible')
    })
})

Then('months should be rendered in "{word}" with navigation', (language) => {
    const months =
        language === 'english'
            ? { current: 'October', previous: 'September', next: 'November' }
            : { current: 'أكتوبر', previous: 'سبتمبر', next: 'نوفمبر' }

    cy.contains(months.current).should('be.visible')
    cy.get('[data-test="calendar-next-month"]').click()
    cy.contains(months.next).should('be.visible')
    cy.get('[data-test="calendar-previous-month"]').click()
    cy.get('[data-test="calendar-previous-month"]').click()
    cy.contains(months.previous).should('be.visible')
})

Then('we should be able to select a day', () => {
    const date = '2021-10-13'
    cy.get(`[data-test="${date}"]`).click()

    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"] input').should(
        'have.value',
        date
    )

    cy.get('[data-test="storybook-calendar-result"]').should('have.text', date)
    cy.get('[data-test="storybook-calendar-result-iso"]').should(
        'have.text',
        '13 October 2021'
    )
})
