Feature: The Switch has an onFocus api

    Scenario: The user focuses the Switch
        Given a Switch with onFocus handler is rendered
        When the Switch is focused
        Then the onFocus handler is called
