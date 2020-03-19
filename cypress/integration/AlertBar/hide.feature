Feature: Hiding the AlertBar

    Scenario: AlertBar hides automatically after the default time
        Given a default AlertBar is rendered
        When the default duration has passed
        Then the AlertBar will not be visible

    Scenario: AlertBars hides automatically after a custom time
        Given an AlertBar with a custom duration is rendered
        When the custom duration has passed
        Then the AlertBar will not be visible

    Scenario: The user clicks the "Cancel" button
        Given a permanent AlertBar with actions is rendered
        When the user clicks on the "Cancel" button
        Then the AlertBar will not be visible
