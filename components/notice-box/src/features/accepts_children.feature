Feature: The NoticeBox can render an optional message

    Scenario: A NoticeBox is provided a message
        Given a NoticeBox receives a message as children
        Then the message is visible
