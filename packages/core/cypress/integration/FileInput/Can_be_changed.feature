Feature: The FIleInput has an onChange api

    Scenario: The user selects a file
        Given a FileInput with onChange handler is rendered
        And the FileInput does not have any files
        When a file is selected
        Then the onChange handler is called
        Then the onChange handler's payload contains the file
