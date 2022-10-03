Feature: The HeaderBar should display debug version infos

    Scenario: The debug version infos are displayed in the profile menu
        Given the HeaderBar is rendered with an app name and app version in runtime context
        When the user opens the profile menu
        Then the instance version should be displayed
        And the app's name and version should be displayed
        
    Scenario: The debug version info modal is displayed when clicking on the menu item
        Given the HeaderBar is rendered with an app name and app version in runtime context
        When the user opens the profile menu
        When the user clicks the debug info menu item
        Then the debug info modal should be shown

    Scenario: The debug version info modal displays debug info
        Given the HeaderBar is rendered with an app name and app version in runtime context
        When the user opens the profile menu
        When the user clicks the debug info menu item
        Then the debug info modal should contain debug info

    Scenario: The debug version info should be copied to clipboard
        Given the HeaderBar is rendered with an app name and app version in runtime context
        When the user opens the profile menu
        When the user clicks the debug info menu item
        When the user clicks the copy debug info button
        Then the debug info should be copied to clipboard
        And the debug info copied to clipboard alert should be shown
        And the debug info modal should not be shown

    Scenario: The debug version infos are displayed with unknown dhis2 version in the profile menu
        Given the HeaderBar is rendered without an instance version in runtime context
        When the user opens the profile menu
        Then the instance version should show as unknown
        And the app's name and version should be displayed

    Scenario: The debug version infos are displayed with unknown app name and version in the profile menu
        Given the HeaderBar is rendered without app name or app version in runtime context
        When the user opens the profile menu
        Then the instance version should be displayed
        And the unknown app with unknown version should be displayed

    Scenario: The debug version infos are displayed with unknown app name in the profile menu
        Given the HeaderBar is rendered without app name in runtime context
        When the user opens the profile menu
        Then the instance version should be displayed
        And the unknown app with app's version should be displayed

    Scenario: The debug version infos are displayed with unknown app version in the profile menu
        Given the HeaderBar is rendered with an app name but without app version in runtime context
        When the user opens the profile menu
        Then the instance version should be displayed
        And the app's name with unknown version should be displayed