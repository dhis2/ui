Feature: The Calendar renders in the islamic-civil calendar system

    Scenario: A Calendar for the Islamic calendar
        Given an Islamic calendar is rendered with Arabic locale
        Then days should be rendered in Arabic
