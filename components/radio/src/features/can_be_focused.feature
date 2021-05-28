Feature: The Radio has an onFocus api

    Scenario: The user focuses the Radio
        Given a Radio with onFocus handler is rendered
        When the Radio is focused
        Then the onFocus handler is called
