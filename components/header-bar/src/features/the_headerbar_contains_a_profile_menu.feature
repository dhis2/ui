Feature: The HeaderBar contains a profile menu

    Scenario: The HeaderBar shows a text icon if the user does not have an avatar
        Given the HeaderBar loads without an error and the user does not have an avatar
        Then the headerbar contains a text icon of size 36px
        When the user clicks on the text icon
        Then the profile menu contains a text icon of size 48px

    Scenario: The HeaderBar shows an image icon if the user has an avatar
        Given the HeaderBar loads without an error and the user has an avatar
        Then the headerbar contains an image icon of size 36px
        When the user clicks on the image icon
        Then the profile menu contains an image icon of size 48px

    Scenario: The menu is closed by default
        Given the HeaderBar loads without an error
        Then the HeaderBar does not display the profile menu

    Scenario: The menu opens
        Given the HeaderBar loads without an error
        When the user clicks on the profile icons
        Then the menu opens

    Scenario: The user name and email are displayed
        Given the HeaderBar loads without an error
        When the user opens the menu
        And contains the user name
        And contains the user email

    Scenario: The user can edit his profile
        Given the HeaderBar loads without an error
        When the user opens the menu
        Then contains a link to edit the profile

    Scenario: The user can go to the settings
        Given the HeaderBar loads without an error
        When the user opens the menu
        Then contains a link to the settings

    Scenario: The user can go to his account
        Given the HeaderBar loads without an error
        When the user opens the menu
        Then contains a link to the user account

    Scenario: The user can go to the help page
        Given the HeaderBar loads without an error
        When the user opens the menu
        Then contains a link to the help page

    Scenario: The user can go to the About DHIS2 page
        Given the HeaderBar loads without an error
        When the user opens the menu
        Then contains a link to the About DHIS2 page

    Scenario: The user can log out
        Given the HeaderBar loads without an error
        When the user opens the menu
        Then contains a link to log out the user
        And there is no loading mask

    # The following are omitted because of testing complications
    # around navigation:

    # Then the user clicks the link to log out
    # Then a loading mask covers the screen
    # And clearSensitiveCaches is called
    # Then the window navigates to the logout URL

    Scenario: The profile menu closes when the user clicks outside
        Given the HeaderBar loads without an error
        When the user opens the menu
        And the user clicks outside of the menu
        Then the HeaderBar does not display the profile menu
