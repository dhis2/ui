Feature: The Switch can be disabled

    Scenario: The user clicks a disabled Switch
        Given a disabled Switch is rendered
        When the user clicks the Switch
        Then the Switch is not focused
