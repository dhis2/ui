Feature: The Switch has an onBlur api

    Scenario: The user blurs the Switch
        Given a Switch with initialFocus and onBlur handler is rendered
        When the Switch is blurred
        Then the onBlur handler is called
