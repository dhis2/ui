Feature: Required status for the ToggleGroupField

    Scenario: Rendering a ToggleGroupField that is required
        Given a ToggleGroupField with label and a required flag is rendered
        Then the required indicator is visible
