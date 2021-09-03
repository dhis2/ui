Feature: The HeaderBar can display online status

    # Configuring to show

    Scenario: The HeaderBar doesn't display online status when not configured
        Given the HeaderBar loads without an error
        Then the HeaderBar does not render online status

    Scenario: The HeaderBar displays online status when configured to
        Given the HeaderBar loads without error with showOnlineStatus configured
        Then the HeaderBar renders online status

    Scenario: The HeaderBar displays online status when PWA is enabled
        Given the HeaderBar loads without error when PWA is enabled
        Then the HeaderBar renders online status

    # Large / small screens & Online / Offline status

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

    # Additional text

    Scenario: No additional status text is displayed by default
        Given the HeaderBar loads without error when PWA is enabled
        Then no info text is displayed
        And the browser goes offline
        Then no info text is displayed

    Scenario: No additional status text is displayed by default on small screens
        Given the HeaderBar loads without error when PWA is enabled
        And the viewport is narrower than 480px
        Then no info text is displayed
        And the browser goes offline
        Then no info text is displayed

    Scenario: Last online text is displayed in status badge when configured and offline
        Given the HeaderBar loads without error with 'LAST_ONLINE' configured
        Then no info text is displayed
        And the browser goes offline
        Then localStorage contains the correct lastOnline date
        Then last online text is displayed in the status badge

    Scenario: Last online text is displayed in status bar when configured and offline
        Given the HeaderBar loads without error with 'LAST_ONLINE' configured
        And the viewport is narrower than 480px
        Then no info text is displayed
        And the browser goes offline
        Then localStorage contains the correct lastOnline date
        Then last online text is displayed in the mobile status bar
