Feature: The RadioFieldFF can set a value

    Scenario: The user clicks the first option
        Given a FieldGroupFF with required RadioFieldFFs and no selected value
        And there are three options
        When the user selects the last option
        Then the form state's value equals the last option's value
