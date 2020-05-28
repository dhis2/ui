Feature: The HeaderBar displays a link to messages and an unread count

    Scenario: The HeaderBar displays a link to the messages
        Given the HeaderBar loads without an error
        Then the HeaderBar contains a link to the messages

    Scenario: There are some unread messages
        Given the HeaderBar loads without an error
        And there are 5 unread messages
        Then the messages link contains an icon with the number 5

    Scenario: There are no unread messages
        Given the HeaderBar loads without an error
        And there are 0 unread messages
        Then the messages link does not contain a count
