import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a nepali calendar in "{word}" is rendered', (language) => {
    cy.visitStory('CalendarInputTesting', `Nepali With ${language}`)
    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"]', {
        timeout: 10000,
    }).click()
    cy.get('[data-test=calendar]').should('be.visible')
})

Then('nepali days should be rendered in "{word}"', (language) => {
    const days =
        language === 'nepali'
            ? ['आइत', 'सोम', 'सोम', 'बुध', 'बिही', 'शुक्र', 'शनि']
            : ['Som', 'Mangl', 'Budha', 'Bihi', 'Shukra', 'Shani', 'Aaita']

    days.forEach((day) => {
        cy.contains(day).should('be.visible')
    })
})

Then('months should be rendered in "{word}" with navigation', (language) => {
    //

    const months =
        language === 'nepali'
            ? { current: 'असोज', previous: 'भदौ', next: 'कार्तिक' }
            : { current: 'Ashwin', previous: 'Bhadra', next: 'Kartik' }

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

Then('we should be able to select a day', () => {
    const nepaliDate = '2078-06-27'
    cy.get(`[data-test="${nepaliDate}"]`).click()

    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"] input').should(
        'have.value',
        nepaliDate
    )

    cy.get('[data-test="storybook-calendar-result"]').should(
        'have.text',
        nepaliDate
    )
})
