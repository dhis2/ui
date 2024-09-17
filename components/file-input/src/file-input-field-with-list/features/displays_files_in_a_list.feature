Feature: The FileInputFieldWithList displays files in a list

    Scenario: Files are displayed in a list
        Given a FileInputFieldWithList with multiple files is rendered
        Then the files are displayed in a list