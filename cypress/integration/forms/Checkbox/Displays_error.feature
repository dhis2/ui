Feature: The Checkbox field displays an error when invalid

    Scenario: The user submits a form with an unchecked required checkbox
        Given an unchecked Checkbox is rendered
        When the user submits the form
        Then an error message is shown
