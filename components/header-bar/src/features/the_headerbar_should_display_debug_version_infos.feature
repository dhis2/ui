Feature: The HeaderBar should display debug version infos

    Scenario: The debug version infos are displayed in the profile menu
        Given the HeaderBar is rendered with an app name and app version in runtime context
        When the user opens the profile menu
        Then the instance version should be displayed
        And the apps's name and version should be displayed