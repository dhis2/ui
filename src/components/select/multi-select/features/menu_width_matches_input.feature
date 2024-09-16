Feature: The menu always has the same size as the input

    Scenario: The MultiSelect input changes width while the menu is closed
        Given a MultiSelect with hidden sibling elements
        When the button is clicked
        Then the siblings are displayed
        And the menu width has decreased
        When the MultiSelect input is clicked
        Then the MultiSelect menu is open
        And the MultiSelect input is left aligned with the menu
        And the MultiSelect input and menu have the same width
