Feature: The Checkbox can be disabled

    Scenario: The user clicks a disabled Checkbox
        Given a disabled Checkbox with onClick handler is rendered
        When the Checkbox is clicked
        Then the onClick handler is not called
