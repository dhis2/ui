Feature: The HeaderBar displays a link to interpretations and an unread count

    Scenario: The HeaderBar displays a link to the interpretations
        Given the HeaderBar loads without an error
        Then the HeaderBar contains a link to the interpretations

    Scenario: There are some unread interpretations
        Given there are 10 unread interpretations
        And the HeaderBar loads without an error
        Then the interpretations link contains an icon with the number 10

    Scenario: There are no unread interpretations
        Given there are 0 unread interpretations
        And the HeaderBar loads without an error
        Then the interpretations link does not contain a count
