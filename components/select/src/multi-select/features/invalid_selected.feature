Feature: Invalid selections are ignored

    Scenario: Some of the MultiSelect's selected values do not have a corresponding option
        Given a MultiSelect with selected values that do not have a corresponding option
        Then the valid selected values are rendered
        And some errors are written to the console
