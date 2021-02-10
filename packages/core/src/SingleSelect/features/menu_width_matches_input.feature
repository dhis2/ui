Feature: The menu always has the same size as the input

    Scenario: The SingleSelect input changes width while the menu is closed
        Given a SingleSelect with hidden sibling elements
        When the button is clicked
        Then the siblings are displayed
        And the menu width has decreased
        When the SingleSelect input is clicked
        Then the SingleSelect menu is open
        And the SingleSelect input is left aligned with the menu
        And the SingleSelect input and menu have the same width
