import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an Ethiopic calendar is rendered in {word}', (language) => {
    cy.visitStory('CalendarInputTesting', `Ethiopic With ${language}`)

    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"]').click()
    cy.get('[data-test=calendar]').should('be.visible')
})

Then('days should be rendered in "{word}"', (language) => {
    const days =
        language === 'amharic'
            ? ['ሰኞ', 'ማክሰ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ', 'እሑድ']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    days.forEach((day) => {
        cy.contains(day).should('be.visible')
    })
})

Then('months should be rendered in "{word}" with navigation', (language) => {
    const months =
        language === 'amharic'
            ? { current: 'ጥቅምት', previous: 'መስከረም', next: 'ኅዳር' }
            : { current: 'Tekemt', previous: 'Meskerem', next: 'Hedar' }

    cy.get('[data-test="calendar-month-select"] option:selected').should(
        'have.text',
        months.current
    )
    cy.get('[data-test="calendar-next-month"]').click()
    cy.get('[data-test="calendar-month-select"] option:selected').should(
        'have.text',
        months.next
    )
    cy.get('[data-test="calendar-previous-month"]').click()
    cy.get('[data-test="calendar-previous-month"]').click()
    cy.get('[data-test="calendar-month-select"] option:selected').should(
        'have.text',
        months.previous
    )
})

Then('the era should not be displayed in the year', () => {
    cy.get('[data-test="calendar-year-select"] option:selected').should(
        'not.contain.text',
        'ERA'
    )
})

Then('we should be able to select a day', () => {
    const date = '2014-02-03'
    cy.get(`[data-test="${date}"]`).click()

    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"] input').should(
        'have.value',
        date
    )

    cy.get('[data-test="storybook-calendar-result"]').should('have.text', date)
})
