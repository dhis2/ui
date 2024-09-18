Feature: The FileInput has an onFocus api

    Scenario: The user focuses the FileInput
        Given a FileInput with onFocus handler is rendered
        When the FileInput is focused
        Then the onFocus handler is called
