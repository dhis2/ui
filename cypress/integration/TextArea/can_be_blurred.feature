Feature: The TextArea has an onBlur api

    Scenario: The user blurs the TextArea
        Given a TextArea with initialFocus and onBlur handler is rendered
        When the TextArea is blurred
        Then the onBlur handler is called
