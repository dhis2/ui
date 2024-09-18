Feature: The HeaderBar can display online status

    # Configuring to show

    Scenario: The HeaderBar doesn't display online status when not configured
        Given the HeaderBar loads without an error
        Then the HeaderBar does not render online status

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

    # This is not a complete test of the connection status functionality --
    # see the app-runtime for detailed tests
    Scenario: The HeaderBar displays an offline status when offline
        Given the HeaderBar loads without error when PWA is enabled
        And the browser goes offline
        Then the status badge shows offline

    # Online status message

    Scenario: In the HeaderBar no online status message text is displayed by default
        Given the HeaderBar loads and is PWA enabled so online status messages will be visible
        Then no online status message text is displayed

    Scenario: In the HeaderBar the online status message text is displayed
        Given the HeaderBar loads and is PWA enabled so online status messages will be visible
        When an online status message is sent
        Then an online status message is displayed

    Scenario: In the HeaderBar the online status message text can be removed
        Given the HeaderBar loads and is PWA enabled so online status messages will be visible
        When an online status message is sent
        Then an online status message is displayed
        When an online status message is removed
        Then no online status message text is displayed

    # Online status message - small screens

    Scenario: In the HeaderBar the online status message text can be set on small screens
        Given the HeaderBar loads and is PWA enabled so online status messages will be visible
        And the viewport is narrower than 480px
        Then no online status message text is displayed
        When an online status message is sent
        Then an online status message is displayed with formatting for small screens
