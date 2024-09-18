Feature: The Input has an onFocus api

    Scenario: The user focuses the Input
        Given a Input with onFocus handler is rendered
        When the Input is focused
        Then the onFocus handler is called
