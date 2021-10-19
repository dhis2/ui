Feature: Can be set to dashboard type

    Scenario: User clicks on the apply sharing tab of a dashboard sharing dialog
        Given a sharing dialog of the dashboard type is visible
        And the two dashboard tabs should be visible
        When the apply sharing tab is clicked
        Then the correct counts are displayed
        And the apply sharing button is visible
