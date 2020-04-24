Feature: The SwitchGroup field displays an error when invalid

    Scenario: Form is submitted with none of the options selected
        Given a required SwitchGroup with no selected value
        When the user submits the form
        Then an error message is shown
