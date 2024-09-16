Feature: The Radio has an onChange api

    Scenario: The user checks the Radio
        Given a Radio with onChange handler is rendered
        When the Radio is checked
        Then the onChange handler is called
