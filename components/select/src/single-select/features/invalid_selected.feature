Feature: An invalid selection is ignored and the select will behave as if it has no selection

    Scenario: The SingleSelect's selected value does not correspond to one of its options
        Given a SingleSelect whose selected value does not correspond to one of its options
        Then the SingleSelect is rendered as if no value is selected
        And an error is written to the console
