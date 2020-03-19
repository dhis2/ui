Feature: The Input has an onBlur api

    Scenario: The user blurs the Input
        Given an Input with initialFocus and onBlur handler is rendered
        When the Input is blurred
        Then the onBlur handler is called
