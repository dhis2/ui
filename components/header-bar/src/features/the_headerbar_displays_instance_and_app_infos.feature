Feature: The HeaderBar displays instance and app infos

    Scenario: The HeaderBar displays both instance and app infos
        Given the HeaderBar has been supplied with an app name and version
        And the HeaderBar's profile menu is visible
        And the profile menu has successfully loaded the instance infos
        Then the instance infos should be displayed
        And the app infos should be displayed

    Scenario: The HeaderBar displays app infos and an instance infos loading message
        Given the HeaderBar has been supplied with an app name and version
        And the HeaderBar's profile menu is visible
        And the profile menu is loading the instance infos
        Then the app infos should be displayed
        And a message stating that the instance infos are being loaded should be displayed

    Scenario: The HeaderBar displays app infos and an instance infos error message
        Given the HeaderBar has been supplied with an app name and version
        And the HeaderBar's profile menu is visible
        And the profile menu failed loading the instance infos
        Then the app infos should be displayed
        And a message stating that loading the instance infos has failed should be displayed

    Scenario: The HeaderBar displays only instance infos
        Given the HeaderBar has not been supplied with an app version
        And the HeaderBar's profile menu is visible
        And the profile menu has successfully loaded the instance infos
        Then the instance infos should be displayed
        And the app infos should not be displayed
