Feature: Required status for the TextAreaField

    Scenario: Rendering a TextAreaField that is required
        Given a TextAreaField with label and a required flag is rendered
        Then the required indicator is visible
