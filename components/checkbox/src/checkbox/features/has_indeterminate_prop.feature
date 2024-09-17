Feature: The input component has an indeterminate prop

    Scenario: The checkbox has the indeterminate prop
        Given the checkbox is marked as indeterminate
        Then its input-element's indeterminate prop is true

    Scenario: The checkbox does not have the indeterminate prop
        Given the checkbox is not marked as indeterminate
        Then its input-element's indeterminate prop is false
