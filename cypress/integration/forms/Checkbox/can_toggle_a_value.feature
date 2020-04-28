Feature: The Checkbox can toggle a value

    Scenario: The user clicks on the Checkbox
        Given an unchecked Checkbox with a value is rendered
        When the user clicks on the Checkbox
        Then the form value that corresponds to the checkbox will be yes

    Scenario: The user clicks on the Checkbox
        Given a checked Checkbox with a value is rendered
        When the user clicks on the Checkbox
        Then the form value that corresponds to the checkbox will be correct
