Feature: The Checkbox can toggle a boolean

    Scenario: The user checks the Checkbox
        Given an unchecked Checkbox without value is rendered
        When the user clicks on the Checkbox
        Then the form value that corresponds to the checkbox will be true

    Scenario: The user unchecks the Checkbox
        Given a checked Checkbox without value is rendered
        When the user clicks on the Checkbox
        Then the form value that corresponds to the checkbox will be false
