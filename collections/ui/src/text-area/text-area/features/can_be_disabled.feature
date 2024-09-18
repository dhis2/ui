Feature: The TextArea can be disabled

    Scenario: The user clicks a disabled TextArea
        Given a disabled TextArea is rendered
        When the user clicks the TextArea
        Then the TextArea is not focused
