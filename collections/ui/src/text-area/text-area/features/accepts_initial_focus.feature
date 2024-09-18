Feature: Focusing the TextArea on mount

    Scenario: The TextArea renders with focus
        Given a TextArea with initialFocus is rendered
        Then the TextArea is focused
