Feature: The FileInput can handle multiple files

    Scenario: The user selects multiple files
        Given a FileInput with multiple and onChange handler is rendered
        And the FileInput does not have any files
        When the user selected multiple files
        Then the onChange handler is called
        Then the onChange handler's payload contains multiple files
