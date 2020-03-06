Feature: Files can be removed from FileInputFieldWithList

    Scenario: Files can be removed from the file list
        Given a FileInputFieldWithList with multiple files is rendered
        When the remove handle behind a file is clicked
        Then the onChange handler is called
        Then the onChange handler's payload does not contain an entry for that file