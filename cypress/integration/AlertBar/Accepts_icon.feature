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
