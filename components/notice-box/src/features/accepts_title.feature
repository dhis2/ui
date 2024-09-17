Feature: The NoticeBox can render an optional title

    Scenario: A NoticeBox is provided a title
        Given a NoticeBox receives a title prop
        Then the title is visible
