Feature: The MultiSelect can set a value

    Scenario: The user selects one option
        Given a required MultiSelect with no selected value
        And the MultiSelect has two options
        When the user selects the first option
        Then the form state's value equals the first option's value

    Scenario: The user selects two options
        Given a required MultiSelect with no selected value
        And the MultiSelect has two options
        When the user selects the first option
        And the user selects the second option
        Then the form state's value contains both options
