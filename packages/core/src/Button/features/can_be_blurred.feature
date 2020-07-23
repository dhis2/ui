Feature: The Button has an onBlur api

    Scenario: The user blurs the Button
        Given an Button with initialFocus and onBlur handler is rendered
        When the Button is blurred
        Then the onBlur handler is called
