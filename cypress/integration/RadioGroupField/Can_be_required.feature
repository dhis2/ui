Feature: Required status for the RadioGroupField

    Scenario: Rendering a RadioGroupField that is required
        Given a RadioGroupField with label and a required flag is rendered
        Then the required indicator is visible
