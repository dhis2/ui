Feature: Hiding the AlertBar

    Scenario: AlertBar hides automatically after the default time
        Given a default AlertBar is rendered
        When the default duration has passed
        Then the AlertBar is not rendered

    Scenario: AlertBars hides automatically after a custom time
        Given an AlertBar with a custom duration is rendered
        When the custom duration has passed
        Then the AlertBar is not rendered

    Scenario: The user clicks the "Cancel" button
        Given a permanent AlertBar with actions is rendered
        When the user clicks on the "Cancel" button
        Then the AlertBar is not rendered

    Scenario: The hidden prop is toggled
        Given a permanent AlertBar with hidden and onHidden is rendered
        Then the AlertBar is not rendered
        And the onHidden handler is not called
        When the user click a button which toggles the hidden prop
        Then the AlertBar is rendered
        When the user click a button which toggles the hidden prop
        Then the AlertBar is not rendered
        And the onHidden handler is called
