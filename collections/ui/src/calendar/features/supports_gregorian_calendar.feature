Feature: The Calendar renders in the Gregorian calendar system

    Scenario: Display a Gregorian calendar in arabic
        Given a Gregorian calendar is rendered in "arabic"
        Then days should be rendered in "arabic"
        And months should be rendered in "arabic" with navigation

    Scenario: Select a day in the Gregorian calendar in arabic
        Given a Gregorian calendar is rendered in "arabic"
        Then we should be able to select a day

    Scenario: Display a Gregorian calendar in English
        Given a Gregorian calendar is rendered in "english"
        Then days should be rendered in "english"
        And months should be rendered in "english" with navigation

    Scenario: Select a day in the Gregorian calendar in English
        Given a Gregorian calendar is rendered in English
        Then we should be able to select a day
