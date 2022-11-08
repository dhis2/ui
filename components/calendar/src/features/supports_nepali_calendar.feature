Feature: The Calendar renders in Nepali calendar system

    Scenario: A Calendar for the Nepali calendar
        Given a Calendar with nepali calendar is rendered
        Then days should be rendered in Nepali
