Feature: Required status for the CheckboxGroupField

    Scenario: Rendering a CheckboxGroupField that is required
        Given a CheckboxGroupField with label and a required flag is rendered
        Then the required indicator is visible
