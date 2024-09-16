Feature: The FileInput field displays an error when invalid

    Scenario: The user provides files with the wrong file type
        Given a single-file FileInput is rendered
        And the InputField does not contain any files
        When a file with the wrong file type is provided
        And the user submits the form
        Then an error message is shown
