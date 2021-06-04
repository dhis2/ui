Feature: Required status for the SwitchField

    Scenario: Rendering a SwitchField that is required
        Given a SwitchField with label and a required flag is rendered
        Then the required indicator is visible
