Feature: The Calendar renders in Nepali calendar system

    Scenario: Display a Nepali calendar in Nepali
        Given a nepali calendar in "nepali" is rendered
        Then nepali days should be rendered in "nepali"
        And months should be rendered in "nepali" with navigation

    Scenario: Select a day in the Nepali calendar in Nepali
        Given a nepali calendar in "nepali" is rendered
        Then we should be able to select a day

    Scenario: Display a Nepali calendar in English
        Given a nepali calendar in "english" is rendered
        Then nepali days should be rendered in "english"
        And months should be rendered in "english" with navigation

    Scenario: Select a day in the Nepali calendar in English
        Given a nepali calendar in "english" is rendered
        Then we should be able to select a day