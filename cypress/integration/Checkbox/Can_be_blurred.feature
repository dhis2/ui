Feature: The Checkbox has an onBlur api

    Scenario: The user blurs the Checkbox
        Given a Checkbox with initialFocus and onBlur handler is rendered
        When the Checkbox is blurred
        Then the onBlur handler is called
