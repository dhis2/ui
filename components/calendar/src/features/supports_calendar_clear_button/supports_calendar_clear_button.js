import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(
    'a "{word}" calendar is rendered with a selected date "{word}"',
    (calendar, initialDate) => {
        cy.visitStory(
            'CalendarInputTesting',
            'Test Calendar With Clear Button',
            {
                qs: {
                    initialDate,
                    calendar,
                },
            }
        )

        cy.get('[data-test="storybook-calendar-date-value"]').should(
            'have.text',
            initialDate
        )
    }
)

Then('we should be able to clear it', () => {
    cy.get(`[data-test="calendar-clear-button"]`).click()
    cy.get('[data-test="storybook-calendar-date-value"]').should(
        'have.text',
        'undefined'
    )
})

Then('show the current month afterwards', () => {
    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"]').click()
    cy.get('.isToday').should('be.visible')
})

Then("allow selecting today's date", () => {
    cy.get('.isToday')
        .parent()
        .invoke('attr', 'data-test')
        .then((todayDate) => {
            cy.get('.isToday').click()
            cy.get('[data-test="storybook-calendar-date-value"]').should(
                'have.text',
                todayDate
            )
            cy.get(
                '[data-test="dhis2-uiwidgets-calendar-inputfield"] input'
            ).should('have.value', todayDate)
        })
})

Then('highlight today as the selected date', () => {
    cy.get('[data-test="dhis2-uiwidgets-calendar-inputfield"]').click()
    cy.get('.isToday')
        .parent()
        .invoke('attr', 'data-test')
        .then((todayDate) => {
            cy.get('.isSelected').should(
                'have.text',
                Number(todayDate.split('-')[2]).toString()
            )
        })
})
