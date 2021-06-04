Feature: Required status for the FileInputField

    Scenario: Rendering a FileInputField that is required
        Given a FileInputField with label and a required flag is rendered
        Then the required indicator is visible
