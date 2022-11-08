Feature: The Calendar renders in the Ethiopic calendar system

    Scenario: A Calendar for the Ethiopic calendar
        Given an Ethiopic calendar is rendered
        Then days should be rendered in Amharic
