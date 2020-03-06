Feature: The Radio can be disabled

    Scenario: The user clicks a disabled Radio
        Given a disabled Radio is rendered
        When the user clicks the Radio
        Then the Radio is not focused
