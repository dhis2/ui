Feature: Required status for the Legend

    Scenario: Rendering a Legend that is required
        Given a Legend with content and a required flag is rendered
        Then the required indicator is visible
