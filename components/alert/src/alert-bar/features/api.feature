Feature: AlertBar API

    Scenario: AlertBar icon shows by default
        Given a default AlertBar is rendered
        Then the icon will be visible

    Scenario: AlertBar icon can be hidden
        Given an AlertBar with disabled icon is rendered
        Then the icon will not be rendered

    Scenario: Custom AlertBar icon
        Given an AlertBar with custom icon is rendered
        Then the custom icon will be visible

    Scenario: Standard AlertBar with a message
        Given an AlertBar with a message is rendered
        Then the message will be visible

    Scenario: The AlertBar renders with a permanent flag
        Given an AlertBar with permanent is rendered
        When the default duration has passed
        Then the AlertBar will be visible

    Scenario: AlertBar will call the onHidden cb when hidden
        Given an AlertBar with onHidden handler is rendered
        When the default duration has passed
        Then the AlertBar is not rendered
        Then the onHidden handler is called

