Feature: The Calendar renders in the Ethiopic calendar system

    Scenario: Display an Ethiopic calendar in Amharic
        Given an Ethiopic calendar is rendered in "amharic"
        Then days should be rendered in "amharic"
        And months should be rendered in "amharic" with navigation

    Scenario: Select a day in the Ethiopic calendar in Amharic
        Given an Ethiopic calendar is rendered in "amharic"
        Then we should be able to select a day

    Scenario: Display an Ethiopic calendar in English
        Given an Ethiopic calendar is rendered in "english"
        Then days should be rendered in "english"
        And months should be rendered in "english" with navigation
        And the era should not be displayed in the year

    Scenario: Select a day in the Ethiopic calendar in English
        Given an Ethiopic calendar is rendered in English
        Then we should be able to select a day
