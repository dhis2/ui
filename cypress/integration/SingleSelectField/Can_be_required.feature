Feature: Required status for the SingleSelectField

    Scenario: Rendering a SingleSelectField that is required
        Given a SingleSelectField with label and a required flag is rendered
        Then the required indicator is visible
