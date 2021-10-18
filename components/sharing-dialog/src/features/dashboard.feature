Feature: Can be set to dashboard type

    Scenario: Dashboard type
        Given a sharing dialog of the dashboard type is visible
        And the two dashboard tabs should be visible
        When the apply sharing tab is clicked
        Then the correct counts are displayed
        And the apply sharing button is visible
