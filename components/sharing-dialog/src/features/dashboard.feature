Feature: Can be set to dashboard type

    Scenario: User clicks on the apply sharing tab of a dashboard sharing dialog
        Given a sharing dialog of the dashboard type is visible
        And the two dashboard tabs are visible
        When the apply sharing tab is clicked
        Then the correct counts should be displayed
        And the apply sharing button should be visible

    Scenario: User applies sharing in the apply sharing tab
        Given a sharing dialog of the dashboard type is visible
        And the apply sharing tab is clicked
        When the apply sharing button is clicked
        Then a result message should be displayed

    Scenario: User fails to apply sharing in the apply sharing tab
        Given a sharing dialog of the dashboard type is visible
        And the apply sharing tab is clicked
        When the apply sharing button is clicked and the backend fails
        Then an alert with the error message should be displayed
