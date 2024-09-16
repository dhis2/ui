Feature: The HeaderBar displays a link to interpretations and an unread count

    Scenario: The HeaderBar displays a link to the interpretations
        Given the HeaderBar loads without an error
        Then the HeaderBar contains a link to the interpretations

    Scenario: There are some unread interpretations
        Given the HeaderBar loads without an error
        Then the interpretations link contains an icon with a number greater than 0

    Scenario: There are no unread interpretations
        Given there are 0 unread interpretations
        Then the interpretations link does not contain a count
