Feature: Required status for the FieldGroup

    Scenario: Rendering a FieldGroup that is required
        Given a FieldGroup with label and a required flag is rendered
        Then the required indicator is visible
