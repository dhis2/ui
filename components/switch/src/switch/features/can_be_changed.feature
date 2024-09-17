Feature: The Switch has an onChange api

    Scenario: The user clicks the Switch
        Given a Switch with onChange handler is rendered
        When the Switch is clicked
        Then the onChange handler is called
