Feature: Required status for the FieldSetField

    Scenario: Rendering a FieldSetField that is required
        Given a FieldSetField with label and a required flag is rendered
        Then the required indicator is visible
