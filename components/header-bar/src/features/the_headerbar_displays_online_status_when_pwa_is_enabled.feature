Feature: The HeaderBar displays online status when PWA is enabled

    Scenario: The HeaderBar displays a badge on large screens
        Given the HeaderBar loads without error when PWA is enabled
        Then the HeaderBar displays only the desktop status badge
        And the status badge shows online

    Scenario: The HeaderBar displays a sub-bar on smaller screens
        Given the HeaderBar loads without error when PWA is enabled
        And the viewport is narrower than 480px
        Then the HeaderBar displays only the mobile status bar

    Scenario: The HeaderBar displays an offline status when offline
        Given the HeaderBar loads without error when PWA is enabled
        And the browser goes offline
        Then the status badge shows offline