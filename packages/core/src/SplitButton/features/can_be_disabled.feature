Feature: The SplitButton can be disabled

    Scenario: The user clicks a disabled SplitButton Button
        Given a disabled SplitButton is rendered
        When the user clicks the SplitButton Button
        Then the SplitButton Button is not focused

    Scenario: The user clicks a disabled SplitButton Toggle
        Given a disabled SplitButton is rendered
        When the user clicks the SplitButton Toggle
        Then the SplitButton Toggle is not focused
