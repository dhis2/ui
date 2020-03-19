Feature: The AlertBars accepts an icon prop

    Scenario: AlertBar icon shows by default
        Given a default AlertBar is rendered
        Then the icon will be visible

    Scenario: AlertBar icon can be hidden
        Given an AlertBar with disabled icon is rendered
        Then the icon will not be visible

    Scenario: Custom AlertBar icon
        Given an AlertBar with custom icon is rendered
        Then the custom icon will be visible

Feature: Shows a message

    Scenario: Standard AlertBar with a message
        Given an AlertBar with a message is rendered
        Then the message will be visible

Feature: Permanently displaying the AlertBar

    Scenario: The AlertBar renders with a permanent flag
        Given an AlertBar with permanent is rendered
        When the default duration has passed
        Then the AlertBar will be visible

Feature: Calls onHidden cb when hidden

    Scenario: Alertbar will call the onHidden cb when hidden
        Given an Alertbar with onHidden handler is rendered
        When the Alertbar is hidden
        Then the onHidden handler is called
