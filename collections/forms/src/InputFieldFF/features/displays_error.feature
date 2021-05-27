Feature: The Input field displays an error when invalid

    Scenario: Form is submitted with empty input
        Given an empty, required Input is rendered
        When the user submits the form
        Then an error message is shown
