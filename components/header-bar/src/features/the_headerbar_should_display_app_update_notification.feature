Feature: The HeaderBar should display app update notification

    Scenario: No app update is available
        Given the HeaderBar is rendered without an available update
        When the user opens the profile menu
        Then the update notification should not be displayed

    Scenario: An app update is available
        Given the HeaderBar is rendered with an available update
        When the user opens the profile menu
        Then the update notification should be displayed

    Scenario: A callback is executed when the user click on the update notification
        Given the HeaderBar is rendered with an available update
        When the user opens the profile menu
        When the user clicks the update notification
        Then a callback should display a test div
    
    Scenario: An app update is available but not app name was specified
        Given the HeaderBar is rendered with no app name and an available update
        When the user opens the profile menu
        Then the update notification should be displayed without app name