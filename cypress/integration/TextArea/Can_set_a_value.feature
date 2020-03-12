Feature: The TextArea can set a value

    Scenario: The user types some text
        Given a TextArea with no text is rendered
        When the user types something in the TextArea
        Then the form state's value equals the written text
