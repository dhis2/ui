Feature: The Calendar allows clearing the selection

    Scenario: Clear the selection in the Gregorian calendar
        Given a "gregory" calendar is rendered with a selected date "2021-10-13"
        Then we should be able to clear it
        And show the current month afterwards
        And allow selecting today's date
        And highlight today as the selected date

    Scenario: Clear the selection in the Ethiopic calendar
        Given a "ethiopic" calendar is rendered with a selected date "2014-02-03"
        Then we should be able to clear it
        And show the current month afterwards
        And allow selecting today's date
        And highlight today as the selected date

    Scenario: Clear the selection in the Nepali calendar
        Given a "nepali" calendar is rendered with a selected date "2078-06-27"
        Then we should be able to clear it
        And show the current month afterwards
        And allow selecting today's date
        And highlight today as the selected date

