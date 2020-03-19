Feature: Required status for the CheckboxField

    Scenario: Rendering a CheckboxField that is required
        Given a CheckboxField with label and a required flag is rendered
        Then the required indicator is visible
