Feature: The HeaderBar should display the app and instance infos

    Scenario: The app and instance infos are displayed in the profile menu
        Given the HeaderBar is rendered with an app name and app version
        When the user opens the profile menu
        Then the instance's name, version and build revision should be displayed
        And the apps's name and version should be displayed

    Scenario: Only the instance infos are displayed in the profile menu
        Given the HeaderBar is rendered with an app name but without an app version
        When the user opens the profile menu
        Then the instance's name, version and build revision should be displayed
        And the apps's name and version should not be displayed

    Scenario: Only the instance infos are loading
        Given the instance infos are being fetched
        When the user opens the profile menu
        Then a loading message should be displayed

    Scenario: The instance infos failed loading
        Given fetching the instance infos failed
        When the user opens the profile menu
        Then an error message should be displayed
