Feature: Required status for the Label

    Scenario: Rendering a Label that is required
        Given a Label with required is rendered
        Then the required indicator is visible
