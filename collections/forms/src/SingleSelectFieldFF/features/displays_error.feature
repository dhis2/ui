Feature: The SingleSelect field displays an error when invalid

    Scenario: Form is submitted with none of the options selected
        Given a required SingleSelect with no selected value
        When the user submits the form
        Then an error message is shown
