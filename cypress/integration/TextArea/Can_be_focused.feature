Feature: The TextArea has an onFocus api

    Scenario: The user focuses the TextArea
        Given a TextArea with onFocus handler is rendered
        When the TextArea is focused
        Then the onFocus handler is called
