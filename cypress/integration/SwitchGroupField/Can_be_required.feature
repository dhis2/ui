Feature: Required status for the SwitchGroupField

    Scenario: Rendering a SwitchGroupField that is required
        Given a SwitchGroupField with label and a required flag is rendered
        Then the required indicator is visible
