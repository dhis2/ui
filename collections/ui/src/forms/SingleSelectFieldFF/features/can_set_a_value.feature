Feature: The SingleSelect can set a value

    Scenario: The user clicks the first option
        Given a required SingleSelect with no selected value
        And the SingleSelect has one option
        When the user selects the first option
        Then the form state's value equals the first option's value
