Feature: The FileInput has an onBlur api

    Scenario: The user blurs the FileInput
        Given an FileInput with initialFocus and onBlur handler is rendered
        When the FileInput is blurred
        Then the onBlur handler is called
