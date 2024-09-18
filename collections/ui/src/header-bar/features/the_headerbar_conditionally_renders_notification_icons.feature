Feature: The HeaderBar conditionally renders notification icons

    Scenario: The user has the All authority
        Given the user has the ALL authority
        Then the interpretations app icon is rendered
        And the messaging app icon is rendered

    Scenario: The user has authority for both apps
        Given the user has the M_dhis-web-interpretation and M_dhis-web-messaging authority
        Then the interpretations app icon is rendered
        And the messaging app icon is rendered

    Scenario: The user has authority for the interpretations app only
        Given the user has the M_dhis-web-interpretation authority
        Then the interpretations app icon is rendered
        But the messaging app icon is not rendered

    Scenario: The user has authority for the messaging app only
        Given the user has the M_dhis-web-messaging authority
        Then the messaging app icon is rendered
        But the interpretations app icon is not rendered

    Scenario: The user has authority for none of the apps
        Given the user has authority for none of the apps
        Then the messaging app icon is not rendered
        And the interpretations app icon is not rendered
