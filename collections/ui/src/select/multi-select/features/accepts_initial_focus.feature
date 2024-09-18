Feature: Focusing the MultiSelect on mount

    Scenario: The MultiSelect renders with focus
        Given a MultiSelect with initial focus is rendered
        Then the MultiSelect has focus
