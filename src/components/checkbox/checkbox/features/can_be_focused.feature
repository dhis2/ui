Feature: The Checkbox has an onFocus api

    Scenario: The user focuses the Checkbox
        Given a Checkbox with onFocus handler is rendered
        When the Checkbox is focused
        Then the onFocus handler is called
