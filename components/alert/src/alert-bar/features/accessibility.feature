Feature: AlertBar accessibility

    Scenario: A default AlertBar message is a polite live region
        Given a default AlertBar is rendered
        Then the AlertBar message has the status role

    Scenario: A critical AlertBar message is an assertive live region
        Given a critical AlertBar is rendered
        Then the AlertBar message has the alert role

    Scenario: The icon is hidden from assistive technologies
        Given a default AlertBar is rendered
        Then the icon is hidden from assistive technologies

    Scenario: The dismiss control is a labelled button
        Given a default AlertBar is rendered
        Then the dismiss control is a button labelled "Dismiss"
