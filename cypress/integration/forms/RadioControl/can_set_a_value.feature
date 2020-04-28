Feature: The RadioControl can set a value

    Scenario: The user clicks the first option
        Given a required RadioControl with no selected value
        And the RadioControl has two options
        When the user selects the first option
        Then the form state's value equals the first option's value
