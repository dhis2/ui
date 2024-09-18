Feature: Required status for the InputField

    Scenario: Rendering a InputField that is required
        Given a InputField with label and a required flag is rendered
        Then the required indicator is visible
