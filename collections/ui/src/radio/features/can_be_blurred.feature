Feature: The Radio has an onBlur api

    Scenario: The user blurs the Radio
        Given a Radio with initialFocus and onBlur handler is rendered
        When the Radio is blurred
        Then the onBlur handler is called
