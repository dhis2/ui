Feature: Focusing the SplitButton on mount

    Scenario: The SplitButton renders with focus
        Given a SplitButton with initialFocus is rendered
        Then the SplitButton button is focused
